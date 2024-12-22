export const msalConfig = {
    auth: {
      clientId: process.env.CLIENT_ID,
      authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`, 
      redirectUri: process.env.REDIRECT_URL,
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };
  
  export const loginRequest = {
    scopes: ['User.Read'], 
  };