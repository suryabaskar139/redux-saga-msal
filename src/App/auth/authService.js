import * as msal from '@azure/msal-browser';
import { msalConfig, loginRequest } from './authConfig';

const msalInstance = new msal.PublicClientApplication(msalConfig);

export const acquireToken = async () => {
    try {
        const accounts = msalInstance.getAllAccounts();
        if (accounts.length === 1) {
          const silentRequest = {
            ...loginRequest,
            account: accounts[0],
          };
          return await msalInstance.acquireTokenSilent(silentRequest);
        } else if (accounts.length > 1) {
          console.warn("Multiple accounts found. Please implement account selection.");
          return null;
        } else {
          return null;
        }
      } catch (silentError) {
        if (silentError instanceof msal.InteractionRequiredAuthError) {
          return null;
        } else {
            console.error("Silent token acquisition error:", silentError)
          throw silentError;
        }
      }
};

export const login = async () => {
  try {
    return await msalInstance.loginPopup(loginRequest);
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      await msalInstance.logoutPopup({
        account: accounts[0],
        postLogoutRedirectUri: msalConfig.auth.redirectUri,
      });
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const getCurrentUser = () => {
  return msalInstance.getAllAccounts()[0];
};

export const isAuthenticated = () => {
    return msalInstance.getAllAccounts().length > 0
}