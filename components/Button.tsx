import React from 'react';

interface IButton {
  text?: string;
  altText?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
}
const Button: React.FC<IButton> = ({
  text,
  onClick,
  type,
  loading = false,
  className,
  disabled,
  icon,
  altText,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
    >
      <span>{!loading ? <>{text}</> : <>{altText}</>}</span>
      <span className="mx-3">{icon}</span>
    </button>
  );
};

export default Button;
