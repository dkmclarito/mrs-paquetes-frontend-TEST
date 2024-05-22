import * as React from 'react';
import { IconContext } from '@phosphor-icons/react';

interface CustomIconProps {
  icon: React.ElementType;
  fill?: string;
  fontSize?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

const CustomIcon: React.FC<CustomIconProps> = ({ icon: IconComponent, fill, fontSize, weight }) => {
  return (
    <IconContext.Provider
      value={{
        color: fill,
        size: fontSize,
        weight: weight,
      }}
    >
      <IconComponent />
    </IconContext.Provider>
  );
};

export default CustomIcon;
