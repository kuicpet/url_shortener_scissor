import React from 'react';

const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  return (
    <footer
      data-testid="footer"
      className="flex items-center justify-center m-5"
    >
      <small>
        Made with <span className="heart">❤</span> by{' '}
        <a
          href="https://github.com/kuicpet"
          target="_blank"
          rel="noreferrer"
          className="border-2 border-white px-2 py-1 rounded-md text-white"
        >
          Kingsley Umujeyan
        </a>{' '}
        &copy; {date}
      </small>
    </footer>
  );
};

export default Footer;
