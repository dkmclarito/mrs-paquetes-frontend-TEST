import * as React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import { paths } from '@/paths';
import type { Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Clientes | Dashboard | ${config.site.name}` } ;

import axios from "axios";
//const axios = require('axios');  
 
async function fetchClientes(): Promise<Customer[]> {  
  try{
    const res = await axios.get("http://localhost:3000/api/clientes");
    return res.data; 
  }catch(ex){
    throw new Error('Failed to fetch clientes data');
  }
}

 
 
 
export default async function Page(): Promise<React.JSX.Element> {
   try{
    const customers = await fetchClientes();  
      const page = 0;
      const rowsPerPage = 5;
      const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

      return (
        <Stack spacing={3}>
          <Stack direction="row" spacing={3}>
            <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
              <Typography variant="h4">Clientes</Typography>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              </Stack>
            </Stack>
            <div>
              <Link href={paths.dashboard.addclientes} passHref>
                <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
                  Nuevo Cliente 
                </Button>
              </Link>
            </div>
          </Stack>
          <CustomersFilters />
          <CustomersTable
            count={customers.length}
            page={page}
            rows={paginatedCustomers}
            rowsPerPage={rowsPerPage}
          />
        </Stack>
      );
  }catch(ex){
    throw  'Excepcion ocurrio :' + ex;
  }
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

