import React, { useState, useRef } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';

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
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter a URL to shorten"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter a URL to shorten"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
          />
          <button type="submit">Shorten</button>
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
  );
};

export default ShortenForm;
