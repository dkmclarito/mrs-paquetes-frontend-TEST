import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  { key: 'paquetes', title: 'Paquetes', href: paths.dashboard.paquetes, icon: 'local-shipping' },
  { key: 'ordenes', title: 'Ordenes', href: paths.dashboard.ordenes, icon: 'assignment' },
  { key: 'integrations', title: 'Empleados', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'vehiculos', title: 'Vehículos', href: paths.dashboard.vehiculos, icon: 'car' },
  { key: 'account', title: 'Perfil', href: paths.dashboard.account, icon: 'user-circle' },
  { key: 'usuarios', title: 'Usuarios', href: paths.dashboard.usuarios, icon: 'user' },
  { key: 'incidencias', title: 'Incidencias', href: paths.dashboard.incidencias, icon: 'warning' },
  { key: 'settings', title: 'Reportes', href: paths.dashboard.settings, icon: 'report' },
  // Agrega la ruta para addclientes
  //{ key: 'addcustomers', title: 'Agregar Clientes', href: paths.dashboard.addclientes, icon: 'users' },

  { key: 'error', title: 'Otros', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
