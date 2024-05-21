import * as React from 'react';
import Box from '@mui/material/Box';

interface IconWrapperProps {
  IconComponent: React.ElementType;
  active: boolean;
  fillActiveColor: string;
  fillNormalColor: string;
  fontSize: string;
  weight?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  IconComponent,
  active,
  fillActiveColor,
  fillNormalColor,
  fontSize,
  weight,
}) => {
  const fill = active ? fillActiveColor : fillNormalColor;

  return (
    <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
      {IconComponent ? (
        <IconComponent fill={fill} fontSize={fontSize} weight={active ? 'fill' : weight} />
      ) : null}
    </Box>
  );
};

export default IconWrapper;
