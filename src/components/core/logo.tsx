import * as React from 'react';
import Box from '@mui/material/Box';
import { useColorScheme } from '@mui/material/styles';
import { NoSsr } from '@/components/core/no-ssr';

const HEIGHT = 100; 
const WIDTH = 100;  

type Color = 'dark' | 'light';

export interface LogoProps {
  color?: Color;
  emblem?: boolean;
  height?: number;
  width?: number;
}

export function Logo({ color = 'dark', emblem, height = HEIGHT, width = WIDTH }: LogoProps): React.JSX.Element {
  const url = emblem
    ? color === 'light'
      ? '/assets/logo-emblem.svg'
      : '/assets/logo-emblem--dark.svg'
    : '/assets/mrpaquetes-logo.png';

  return (
    <Box
      component="img"
      alt="logo"
      src={url}
      sx={{
        width: '225px',
        objectFit: 'contain',
        display: 'block',
        margin: '0 auto',
             }}
    />
  );
}

export interface DynamicLogoProps {
  colorDark?: Color;
  colorLight?: Color;
  emblem?: boolean;
  height?: number;
  width?: number;
  
}

export function DynamicLogo({
  colorDark = 'light',
  colorLight = 'dark',
  height = HEIGHT,
  width = WIDTH,
  
  ...props
}: DynamicLogoProps): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === 'dark' ? colorDark : colorLight;

  return (
    <NoSsr fallback={<Box sx={{ height: `${height}px`, width: `${width}px` }} />}>
      <Logo color={color} emblem={props.emblem} height={height} width={width} />
    </NoSsr>
  );
}