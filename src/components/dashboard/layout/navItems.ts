import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';


export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Empleados', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Ajustes', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Perfil', href: paths.dashboard.account, icon: 'user' },
  // Agrega la ruta para addclientes
  //{ key: 'addcustomers', title: 'Agregar Clientes', href: paths.dashboard.addclientes, icon: 'users' },

  { key: 'error', title: 'Otros', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
