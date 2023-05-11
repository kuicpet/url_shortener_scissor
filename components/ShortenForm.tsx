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
    <section className="max-w-7xl mx-auto">
      <div>
        <form onSubmit={handleSubmit} className="mt-16 max-w-3xl">
          <div className="flex flex-col gap-5">
            <input
              className="bg-gray-50 border-2  border-black text-gray-900 text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-3/4 p-3 rounded-md"
              type="text"
              placeholder="Enter a URL to shorten"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <input
              className="bg-gray-50 border-2  border-black text-gray-900 text-sm  focus:ring-black focus:border-black outline-none block w-full lg:w-3/4 p-3 rounded-md"
              type="text"
              placeholder="Enter a Custom Text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
            <button
              type="submit"
              className="mt-3 font-medium bg-[#6469ff] rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? 'Shortening...' : 'Shorten'}
            </button>
          </div>
          {shortUrl && (
            <div>
              <p>Your shortened Url:</p>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
              {showQrCode && (
                <div>
                  <p>QR Code:</p>
                  <QRCode value={shortUrl} size={128} ref={qrCodeRef} />
                  <button
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
        </form>
      </div>
    </section>
  );
};

export default ShortenForm;
