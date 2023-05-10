import React, { useState } from 'react';
import axios from 'axios';

const ShortenForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/api/shorten', { originalUrl });
      setShortUrl(response.data.shortUrl);
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
          <button type="submit">Shorten</button>
        </div>
        {shortUrl && (
          <div>
            <p>Your shortened Url:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default ShortenForm;
