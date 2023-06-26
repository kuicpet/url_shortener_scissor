import React from 'react';
import { getFullYear } from '../utils/getCurrentYear';

const Footer: React.FC = () => {
  return (
    <footer
      data-testid="footer"
      className="flex items-center lg:justify-end justify-center mt-5 mx-5"
    >
      <small className="p-3">
        Terms of Service | Security | &copy; Scissor {getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
