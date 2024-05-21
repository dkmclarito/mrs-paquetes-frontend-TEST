export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard', 
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    addclientes: '/dashboard/addclientes',
    paquetes: '/dashboard/paquetes',
    ordenes: '/dashboard/ordenes',
    vehiculos: '/dashboard/vehiculos',
    usuarios: '/dashboard/usuarios',
    incidencias: '/dashboard/incidencias',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
