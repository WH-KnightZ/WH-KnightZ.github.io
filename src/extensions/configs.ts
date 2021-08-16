export const baseURL = 'https://hb.api.stg.deu.boot.ai/api/v1/';

export const app = {
  secretKey: 'vinhquang',
  expiresIn: '30d',
};

/**
 * Declare routes user APIs
 */
export const userAPIs = {
  login: () => 'auth/login',
  register: () => 'users/register',
};

/**
 * Declare routes admin APIs
 */
export const adminAPIs = {
  users: (id?: string) => `users${id ? `/${id}` : ''}`,
};

/**
 * Declare paths user
 */
export const userRoutes = {
  base: '/',
  notFound: '/404',
  login: '/login',
  register: '/register',
};

/**
 * Declare paths admin
 */
export const adminRoutes = {
  base: '/admin',
  users: '/admin/users',
};

export const validate = {
  validateEmail: () => /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  validatePassword: () => /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()\\-_=+{}|?>.<,:;]{8,16}/,
  valueTypingExpressionsNumber: (e: any) => /^[0-9]*$/.test(e.target.value),
};
