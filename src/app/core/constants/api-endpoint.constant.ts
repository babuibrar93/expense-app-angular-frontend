export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    GOOGLE: 'auth/google',
    GITHUB: 'auth/github',
    FACEBOOK: 'auth/facebook',
  },
  USER: {
    SUPER_ADMIN_STATS: 'user/super-admin/stats',
    ADD_USER: 'user/add-user',
  },
  MODULE: {
    CREATE_MODULE: 'module',
    FETCH_ALL_MODULES: 'module',
  },
  ORGANIZATION: {
    CREATE_ORGANIZATION: 'organization',
    UPDATE_ORGANIZATION: 'organization',
    DELETE_ORGANIZATION: 'organization',
    FETCH_ONE_ORGANIZATION: 'organization',
    FETCH_ALL_ORGANIZATION: 'organization',
    FETCH_ALL_ORGANIZATION_USERS: 'organization',
  },
  ROLE: {
    CREATE_ROLE: 'role',
    UPDATE_ROLE: 'role',
    DELETE_ROLE: 'role',
    FETCH_ONE_ROLE: 'role',
    FETCH_ALL_ROLE: 'role',
  },
  EXPENSE: {
    CREATE_EXPENSE: 'expense',
    UPDATE_EXPENSE: 'expense',
    DELETE_EXPENSE: 'expense',
    FETCH_ONE_EXPENSE: 'expense',
    FETCH_ALL_EXPENSE: 'expense',
    FETCH_EXPENSE_STATS: 'expense/stats',
  },
};
