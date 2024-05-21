import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DynamicLogo } from '@/components/core/logo'; // Asegúrate de que esta ruta sea correcta

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'grid' },
        flexDirection: 'column',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <Box sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 0 }}>
          <Box sx={{ maxWidth: '100%', width: '100%' }}>{children}</Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
          color: 'var(--mui-palette-common-white)',
          display: { xs: 'none', lg: 'flex' },
          justifyContent: 'center',
          p: 3,
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography
              color="inherit"
              sx={{
                fontSize: '24px',
                fontStyle: 'italic',
                fontWeight: 'bold',
                lineHeight: '32px',
                textAlign: 'center',
              }}
              variant="h1"
            >
              Bienvenido a{' '}
              <Box component="span" sx={{ color: '#635bff' }}>
                Mr paquetes
              </Box>
            </Typography>
            <Typography align="center" variant="subtitle1">
              "Sistema de recolección, envío, entrega y seguimiento de paquetes"
            </Typography>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <DynamicLogo emblem={true} height={500} width={500} />  {/* Ajustar tamaño aquí también */}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              alt="Widgets"
              src="/assets/repartidor.png"
              sx={{ height: 'auto', width: '100%', maxHeight: '450px', maxWidth: '400px' }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
