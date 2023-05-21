import React, { useState, useRef } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';
import Confetti from 'react-confetti';
import { toast, Toaster } from 'react-hot-toast';
// import { MdOutlineContentCopy } from 'react-icons/md';
import Loader from './Loader';
import Button from './Button';
import { IUrl } from '../models/Url';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const ShortenForm: React.FC = () => {
  const qrCodeRef = useRef<any>(null);

  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [customText, setCustomText] = useState<string>('');
  const [showQrCode, setShowQrCode] = useState<Boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [urlDetails, setUrlDetails] = useState<IUrl | null>(null);

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!originalUrl) {
      setError('Please enter a Url to shorten');
      return;
    }
    setError('');
    try {
      setLoading(true);
      const response = await axios.post('/api/shorten', {
        originalUrl,
        customText,
      });
      toast.success(response.data.message, {
        style: {
          color: 'white',
          backgroundColor: 'green',
        },
      });
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
      setShortUrl(response.data.shortUrl);
      setUrlDetails(response.data);
      setShowQrCode(true);
      /* if (qrCodeRef.current) {
        const canvas = qrCodeRef.current.getElementByTagName('canvas')[0];
        canvas.toBlob((blob: any) => {
          saveAs(blob, 'qrcode.png');
        });
      }*/

      setLoading(false);
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message, {
        style: {
          color: 'white',
          backgroundColor: 'red',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  // Download QrCode
  const downLoadQrCode = () => {
    const canvas = document.getElementById('qrcode') as HTMLCanvasElement;
    const image = canvas.toDataURL('image/png');
    saveAs(image, 'qrcode.png');
    toast.success('Image downloaded successfully', {
      style: { color: 'white', backgroundColor: 'green' },
    });
  };

  // Copy Short url
  const copyShortUrl = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Url copied to clipboard', {
        style: {
          color: 'white',
          backgroundColor: 'green',
        },
      });
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      toast.error('An error occurred while copying the Url', {
        style: {
          color: 'white',
          backgroundColor: 'red',
        },
      });
    }
  };

  // Redirection
  const redirectCopiedLink = (link: string) => {
    const tempLink = document.createElement('a');
    tempLink.href = link;
    tempLink.target = '_blank';
    tempLink.rel = 'noopener noreferrer';
    document.body.appendChild(tempLink);
  };
  return (
    <section className="grid  lg:grid-cols-2 mx-auto p-2 gap-2 ">
      <div className="">
        <Toaster />
        {showConfetti && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
        <form onSubmit={handleSubmit} className="mt-16 max-w-3xl p-3">
          <div className="flex flex-col  gap-5 items-center">
            <input
              className="bg-gray  text-white text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-3/4 p-3 rounded-md"
              type="url"
              placeholder="Enter a URL to shorten"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <div className="text-red-500 text-sm">{error}</div>
            <input
              className="bg-gray text-white text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-3/4 p-3 rounded-md"
              type="text"
              placeholder="Enter a Custom Text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
            <Button
              loading={loading}
              disabled={!originalUrl}
              text="Shorten"
              type="submit"
              className='"disabled:cursor-not-allowed disabled:bg-gray-500 enabled:bg-gradient-to-r to-green-400 from-blue-500 mt-3  font-bold outline-none border-none rounded-md text-sm w-full lg:w-3/4 sm:w-auto px-5 py-2.5 text-center text-white"'
            />
          </div>
        </form>
      </div>
      <div
        className={
          shortUrl &&
          `border border-white rounded-lg p-3 w-full lg:w-3/4 mx-auto relative`
        }
      >
        {loading && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
          </div>
        )}

        {shortUrl && (
          <div className="">
            <div className="my-3 border p-2 rounded-lg text-center">
              <p className="">Shortened Url</p>
              <a
                href={`api/redirect/${shortUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${shortUrl}`}
              </a>

              <Button
                type="button"
                text="Copy"
                className="mt-3 lg:ml-5 font-medium border-2 rounded-md text-sm w-full lg:w-1/4 sm:w-auto px-5 py-1 text-center bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                onClick={() =>
                  copyShortUrl(`${baseUrl}/api/redirect/${shortUrl}`)
                }
              />
            </div>
            {showQrCode && (
              <div className="flex flex-col items-center border text-center p-2 rounded-lg ">
                <p>QR Code</p>
                <div className="h-[144px] border-[8px] w-[144px] rounded-lg flex items-center justify-center p-2 m-2">
                  <div className="p-2 w-[136px] h-[136px] border-[16px]  rounded-lg m-5 flex items-center justify-center bg-white">
                    <QRCode
                      value={shortUrl}
                      size={120}
                      ref={qrCodeRef}
                      id="qrcode"
                    />
                  </div>
                </div>
                <Button
                  onClick={downLoadQrCode}
                  type="button"
                  text="Download QR Code"
                  className="my-3 font-medium border-2 rounded-md text-sm w-full lg:w-3/4 sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShortenForm;
