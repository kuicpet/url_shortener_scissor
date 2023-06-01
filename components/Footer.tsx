import React from 'react';

const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  return (
    <footer
      data-testid="footer"
      className="flex items-center lg:justify-end justify-center mt-5 mx-5"
    >
      <small className="p-3">
        Terms of Service | Security | &copy; Scissor {date}
      </small>
    </footer>
  );
};

export default Footer;
