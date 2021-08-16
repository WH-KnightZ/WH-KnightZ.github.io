import axios from 'axios';
import { ls } from './extensions';

/**
 * Create title from snake case
 * @param str
 */
export const titleCase = (str: string) => {
  return str
    .replaceAll('_', ' ')
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Get user info from local storage
 */
export const getUserLS = () => {
  return ls.get('user') || {};
};

/**
 * Save user info to local storage
 * @param user
 */
export const addUserLS = (user: any) => {
  let newUser = ls.get('user') || {};
  ls.set('user', { ...newUser, ...user });
};

/**
 * Clear user info from local storage
 */
export const removeUserLS = () => {
  ls.remove('user');
};

/**
 * Sign out
 */
export const actionSignOut = ({ history, dispatch }: { history: any; dispatch: any }) => {
  removeUserLS();
  dispatch({ type: 'SIGN_OUT' });
  axios.defaults.headers.common['Authorization'] = '';
  history.push('/');
};

/**
 * Add column no to the table
 * @param item
 * @param index
 * @param page
 */
export const addNo = (item: any, index: number, page: number, pageSize: number) => {
  return { ...item, no: index + 1 + pageSize * (page - 1) };
};
