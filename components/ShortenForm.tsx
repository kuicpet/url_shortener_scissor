import React, { useState, useRef } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';
import Loader from './Loader';

const ShortenForm = () => {
  const qrCodeRef = useRef<any>(null);
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [customText, setCustomText] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/api/shorten', {
        originalUrl,
        customText,
      });
      setShortUrl(response.data.shortUrl);
      setShowQrCode(true);
      if (qrCodeRef.current) {
        const canvas = qrCodeRef.current.getElementByTagName('canvas')[0];
        canvas.toBlob((blob: any) => {
          saveAs(blob, 'qrcode.png');
        });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="grid  lg:grid-cols-2 mx-auto p-2 gap-2 ">
      <div className="">
        <form onSubmit={handleSubmit} className="mt-16 max-w-3xl p-3">
          <div className="flex flex-col  gap-5 items-center">
            <input
              className="bg-gray  text-white text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-3/4 p-3 rounded-md"
              type="url"
              placeholder="Enter a URL to shorten"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <input
              className="bg-gray text-white text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-3/4 p-3 rounded-md"
              type="text"
              placeholder="Enter a Custom Text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
            <button
              type="submit"
              disabled={!originalUrl}
              className="disabled:cursor-not-allowed bg-gradient-to-r to-green-400 from-blue-500 mt-3 hover:from-pink-500 hover:to-yellow-500 font-bold outline-none border-none rounded-md text-sm w-full lg:w-3/4 sm:w-auto px-5 py-2.5 text-center text-white"
            >
              {loading ? 'Shortening...' : 'Shorten'}
            </button>
          </div>
        </form>
      </div>
      <div
        className={
          shortUrl && `border border-white rounded-lg p-3 w-3/4 mx-auto`
        }
      >
        {shortUrl && (
          <div className="">
            <div className="my-3 border p-2 rounded-lg text-center">
              <p className="">Your shortened Url:</p>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
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
