import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';
import Confetti from 'react-confetti';
import { toast, Toaster } from 'react-hot-toast';
import { MdOutlineContentCopy } from 'react-icons/md';
import Loader from './Loader';
import Button from './Button';
import { ImMagicWand } from 'react-icons/im';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoAnalytics } from 'react-icons/io5';
import useAuthStore from '../store/authStore';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const ShortenForm: React.FC = () => {
  const { userProfile } = useAuthStore();
  const qrCodeRef = useRef<any>(null);
  const router = useRouter();

  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [customText, setCustomText] = useState<string>('');
  const [customDomain, setCustomDomain] = useState<string>('');
  const [showQrCode, setShowQrCode] = useState<Boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    const storedShortUrl = localStorage.getItem('shortUrl');
    if (storedShortUrl) {
      setShortUrl(storedShortUrl);
      setShowQrCode(true);
    }
  }, []);

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
        originalUrl: originalUrl,
        customText: customText,
        customDomain: customDomain,
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
      console.log(response.data);
      setShortUrl(response.data.shortUrl);

      /* if (qrCodeRef.current) {
        const canvas = qrCodeRef.current.getElementByTagName('canvas')[0];
        canvas.toBlob((blob: any) => {
          saveAs(blob, 'qrcode.png');
        });
      }*/
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('shortUrl', response.data.shortUrl);
      }
      setShowQrCode(true);
      setLoading(false);
    } catch (error: any) {
      // console.error(error?.response?.data);
      toast.error(error?.response?.data?.message, {
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

  // Clear Results
  const clearResults = () => {
    localStorage.removeItem('shortUrl');
    setShortUrl('');
    setOriginalUrl('');
    setCustomText('');
    setCustomDomain('');
  };

  // User Navigation
  const navigate = () => {
    if (userProfile) {
      router.push(`/dashboard/${shortUrl}`);
    } else {
      router.push(`/login`);
    }
  };

  return (
    <section
      id="try"
      className={
        !shortUrl
          ? `flex items-center justify-center mx-auto p-2 gap-2`
          : `grid lg:grid-cols-2 gap-2 `
      }
    >
      <div className="flex items-center justify-center lg:order-first md:order-1 order-last">
        <Toaster />
        {showConfetti && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
        <form
          onSubmit={handleSubmit}
          className="mt-16 p-3 bg-white rounded-xl  lg:w-[29rem]"
        >
          <div className="flex flex-col items-center">
            <input
              className="border border-[#3284FF]  text-[#3284FF] my-5 text-sm  focus:ring-black focus:border-black outline-none block w-full p-3 rounded-lg placeholder:text-[#3284FF]"
              type="url"
              placeholder="Paste URL here..."
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <div className="text-red-500 text-sm">{error}</div>
            <div className="flex w-full md:flex-row lg:flex-row flex-col   justify-around gap-2">
              <input
                className="border border-[#3284FF]  text-[#3284FF]  text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-1/2 p-3 rounded-lg placeholder:text-[#3284FF]"
                type="text"
                placeholder="Customize domain"
                value={customDomain}
                onChange={(e) => setCustomDomain(e.target.value)}
              />
              <input
                className="border border-[#3284FF]  text-[#3284FF]  text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-1/2 p-3 rounded-lg placeholder:text-[#3284FF]"
                type="text"
                placeholder="Type Alias here"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
              />
            </div>
            <Button
              icon={<ImMagicWand />}
              loading={loading}
              disabled={!originalUrl}
              altText="Trimming URL..."
              text="Trim URL"
              type="submit"
              className="flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 bg-[#005AE2] my-10  font-bold outline-none border-none text-sm w-full  px-5 py-2.5 text-center text-white rounded-full"
            />
          </div>
          <p className="text-[#4991FF] text-sm my-4 w-full text-justify">
            By clicking TrimURL, I agree to the{' '}
            <span className="font-semibold">
              Terms of Service, Privacy Policy{' '}
            </span>
            and Use of Cookies.
          </p>
          {shortUrl && (
            <>
              <button
                className="font-medium border-2 border-[red] text-[red] rounded-full  w-full lg:w-1/2 sm:w-auto px-5 py-2.5 text-center hover:bg-[red] hover:text-white transition ease-in-out delay-75"
                type="button"
                onClick={() => clearResults()}
              >
                Reset
              </button>
            </>
          )}
        </form>
        {/*<div className="border">
          {urlDetails && <UrlDetails url={urlDetails} />}
        </div>
        <div className="flex items-center justify-center my-2 ">
          <Button
            onClick={() => rounter.push('/dashboard')}
            text="Track your Links"
            className="lg:ml-5 font-medium border-2 rounded-md text-sm  lg:w-1/2 sm:w-auto px-5 py-1 text-center bg-gradient-to-r from-pink-500 hover:to-yellow-500"
          />
        </div>*/}
      </div>
      <div
        className={
          shortUrl &&
          `bg-white rounded-2xl mt-16 w-full lg:w-[29rem] mx-auto relative`
        }
      >
        {loading && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
          </div>
        )}

        {shortUrl && (
          <>
            <div className="w-full">
              <div className="my-3 p-2  text-center w-full bg-white">
                <p className="font-bold text-[#005AE2]">Shortened Url</p>
                <div className="flex items-center justify-center p-2">
                  <a
                    className="px-3 underline hover:text-cyan-500 text-[#005AE2]"
                    href={`api/redirect/${shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`${customDomain}/${shortUrl}`}
                  </a>

                  <Button
                    icon={<MdOutlineContentCopy />}
                    type="button"
                    text="Copy"
                    className="flex items-center justify-center  lg:ml-5 font-medium border-[#005AE2] border-2 outline-none text-sm  lg:w-1/4 sm:w-auto px-5 py-1 text-center bg-white text-[#005AE2] rounded-full hover:text-white hover:bg-[#005AE2]"
                    onClick={() =>
                      copyShortUrl(`${baseUrl}/api/redirect/${shortUrl}`)
                    }
                  />
                </div>
              </div>
              {showQrCode && (
                <React.Fragment>
                  <div className="flex flex-col items-center text-center p-1">
                    <p>QR Code generated</p>
                    <div className="h-[144px] border-[8px] w-[144px] rounded-lg flex items-center justify-center p-2 m-2 s">
                      <div className="p-2 w-[136px] h-[136px] border-[16px]  rounded-lg m-5 flex items-center justify-center bg-white">
                        <QRCode
                          value={shortUrl}
                          size={120}
                          ref={qrCodeRef}
                          id="qrcode"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-row w-full items-center lg:justify-between justify-around gap-3">
                      <Button
                        onClick={downLoadQrCode}
                        type="button"
                        text="Download QR Code"
                        className="font-medium border-2 border-[#005AE2] text-[#005AE2] rounded-full text-sm w-full lg:w-1/2 sm:w-auto px-5 py-2.5 text-center hover:bg-[#005AE2] hover:text-white transition ease-in-out delay-75"
                      />
                      <button
                        className="font-medium border-2 border-[#005AE2] text-[#005AE2] rounded-full text-sm w-full lg:w-1/2 sm:w-auto px-5 py-2.5 text-center hover:bg-[#005AE2] hover:text-white transition ease-in-out delay-75"
                        onClick={() => navigate()}
                      >
                        <span className="flex items-center justify-center">
                          <IoAnalytics size={16} className="mx-2" /> View
                          Analytics
                        </span>
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ShortenForm;
