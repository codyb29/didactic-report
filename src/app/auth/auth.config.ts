// src/app/auth/auth.config.ts
import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'ldSSq5lE5i5fOlBtqNYUUppK4Y7ovql6',
  CLIENT_DOMAIN: 'seabar.auth0.com',
  AUDIENCE: 'https://seabar.auth0.com/userinfo', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};