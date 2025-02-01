import React from 'react';
import clsx from 'clsx';

type Variant = 'small' | 'medium' | 'large';
type FontFamily = 'kiona' | 'moon';  

interface TypographyProps {
  variant?: Variant;
  fontFamily?: FontFamily;
  className?: string;
  children: React.ReactNode;
}

interface LinkProps extends TypographyProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const sizeMapping: Record<Variant, string> = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-xl',
};

const fontFamilyMapping: Record<FontFamily, string> = {
  kiona: "font-kiona",
  moon: "font-moon"
};

export const P: React.FC<TypographyProps> = ({
  variant = 'medium',
  fontFamily = 'kiona',
  className,
  children,
}) => {
  const combinedClasses = clsx(
    sizeMapping[variant],
    fontFamily && fontFamilyMapping[fontFamily],
    'text-black leading-relaxed font-kiona',
    className
  );
  return <p className={combinedClasses}>{children}</p>;
};

export const H: React.FC<TypographyProps> = ({
  variant = 'large',
  fontFamily = 'kiona',  
  className,
  children,
}) => {
  const combinedClasses = clsx(
    sizeMapping[variant],
    fontFamily && fontFamilyMapping[fontFamily],
    'text-black leading-snug font-bold font-kiona',
    className
  );
  return <h1 className={combinedClasses}>{children}</h1>;
};

export const Link: React.FC<LinkProps> = ({
  variant = 'medium',
  fontFamily = 'kiona',  
  className,
  children,
  onClick,
}) => {
  const combinedClasses = clsx(
    sizeMapping[variant],
    fontFamily && fontFamilyMapping[fontFamily],
    'text-blue-500 underline cursor-pointer hover:text-blue-600 font-kiona',
    className
  );
  return (
    <a className={combinedClasses} onClick={onClick}>
      {children}
    </a>
  );
};