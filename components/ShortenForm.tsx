import React, { useState, useRef } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';
import Confetti from 'react-confetti';
import { toast, Toaster } from 'react-hot-toast';
import Loader from './Loader';
import Button from './Button';
import { IUrl } from '../models/Url';

const ShortenForm: React.FC = () => {
  const qrCodeRef = useRef<any>(null);

  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [customText, setCustomText] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [urlDetails, setUrlDetails] = useState<IUrl | null>(null);

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
      toast.success(response.data.message);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      setShortUrl(response.data.shortUrl);
      setUrlDetails(response.data);
      setShowQrCode(true);
      if (qrCodeRef.current) {
        const canvas = qrCodeRef.current.getElementByTagName('canvas')[0];
        canvas.toBlob((blob: any) => {
          saveAs(blob, 'qrcode.png');
        });
      }

      setLoading(false);
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
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
          `border border-white rounded-lg p-3 lg:w-3/4 mx-auto relative`
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
              <p className="">Your shortened Url:</p>
              <a
                href={`api/redirect`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`http://localhost:3000/${shortUrl}`}
              </a>
            </div>
            {showQrCode && (
              <div className="flex flex-col items-center border text-center p-2 rounded-lg ">
                <p>QR Code:</p>
                <div className="p-2 w-[136px] h-[136px] border border-3 rounded-lg m-5 flex items-center justify-center">
                  <QRCode value={shortUrl} size={120} ref={qrCodeRef} />
                </div>
                <button
                  type="button"
                  className="mt-3 font-medium  border-2 rounded-md text-sm w-full lg:w-3/4 sm:w-auto px-5 py-2.5 text-center"
                  onClick={() => {
                    if (qrCodeRef.current) {
                      const canvas =
                        qrCodeRef.current.getElementByTagName('canvas')[0];
                      canvas.toBlob((blob: any) => {
                        saveAs(blob, 'qrcode.png');
                      });
                    }
                  }}
                >
                  Download QR Code
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShortenForm;
