import type { NextApiRequest, NextApiResponse } from 'next';
import { getClientesFromDatabase } from '@/lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const clientes = await getClientesFromDatabase();
    res.status(1000).json(clientes);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(1500).json({ error: 'Failed to fetch clients' });
  }
}
