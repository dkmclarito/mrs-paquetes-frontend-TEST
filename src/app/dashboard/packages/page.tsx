import * as React from 'react';
import Link from 'next/link'; 
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';
import { config } from '@/config';

import { PackagesFilters } from '@/components/dashboard/packages/packages-filters';
import { PackagesTable } from '@/components/dashboard/packages/packages-table';

import type { Packages } from '@/components/dashboard/packages/packages-table';
import { paths } from '@/paths';
import { Phone } from '@phosphor-icons/react';

export const metadata = { title: `Paquetes | Dashboard | ${config.site.name}` } satisfies Metadata;

const packages = [
  {
    id: 'USR-010',
    typePackages: 'Ligero',
    idEmpaque: 'DKM12345',
    weight: '2Kg',
    status: 'En tránsito',
    shippingDate:  dayjs().subtract(2, 'hours').toDate(),
    action : 'Acciones a realizar',
  },
  // ...otros paquetes
];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedPackages = applyPagination(packages, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Paquetes</Typography>
         
        </Stack>
        <div>
        <Link href={paths.dashboard.addpackages} passHref>
            <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained" component="a">
              Nuevo Paquete
            </Button>
          </Link>
        </div>
      </Stack>
      <PackagesFilters />
      <PackagesTable
        count={paginatedPackages.length}
        page={page}
        rows={paginatedPackages}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Packages[], page: number, rowsPerPage: number): Packages[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}