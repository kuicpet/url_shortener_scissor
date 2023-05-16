import React from 'react';
import { IUrl } from '../models/Url';

interface UrlDetailsProps {
  url: IUrl;
}
const UrlDetails: React.FC<UrlDetailsProps> = ({ url }) => {
  return (
    <div>
      <h2>Url Details</h2>
      <p>Original Url: {url.originalUrl}</p>
      <p>Short Url: {url.shortUrl}</p>
      <p>Clicks: {url?.clicks?.length}</p>
      <h3>Visitor IP Addresses:</h3>
      <ul>
        {url?.clicks?.map((click) => (
          <li key={click.ipAddress}>{click.ipAddress}</li>
        ))}
      </ul>
    </div>
  );
};

export default UrlDetails;
