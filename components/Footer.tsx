import React from 'react';

const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="flex items-center justify-end mt-5">
      <small className="p-3">
        Terms of Service | Security | &copy; Scissor {date}
      </small>
    </footer>
  );
};

export default Footer;
