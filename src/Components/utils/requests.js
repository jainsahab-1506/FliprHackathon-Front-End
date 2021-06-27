<<<<<<< Updated upstream
export const SITE_URL = 'localhost:5000';
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const requests = {
	fetchUserChains: '/chains',
	doLogin: '/login',
	createEmailGroup: '/email-group',
=======
export const SITE_URL = "localhost:5000";
export const SERVER_URL = "https://flipr-back.herokuapp.com";

export const requests = {
  fetchUserChains: "/chains",
  doLogin: "/login",
  doRegister: "/register",
  doOAuthLogin: "/oauthlogin",
>>>>>>> Stashed changes
};
