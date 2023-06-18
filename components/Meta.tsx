import { Helmet } from 'react-helmet';

interface IMeta {
  title?: string;
  description?: string;
  keywords?: string;
}
const Meta: React.FC<IMeta> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Scissor - URL Shortener',
  description:
    'Optimize Your Online Experience with Our AdvancedURL ShorteningSolution',
  keywords: 'url-shortening, custom-links, qrcode, short-links',
};

export default Meta;
