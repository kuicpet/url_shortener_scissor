import React from 'react';

interface IButton {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  loading?: boolean;
  className: string;
  disabled?: boolean;
}
const Button: React.FC<IButton> = ({
  text,
  onClick,
  type,
  loading = false,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
    >
      {!loading ? <>{text}</> : 'Shortening...'}
    </button>
  );
};

export default Button;
