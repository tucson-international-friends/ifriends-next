// src/Auth/Auth.js

import auth0 from "auth0-js";

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: "tucson-international-friends.auth0.com",
		clientID: "oLlAKPhOoCHCbBgYzOYC9nt2oKnREk9p",
		redirectUri: "http://localhost:3000",
		responseType: "token id_token",
		scope: "openid"
	});

	login() {
		this.auth0.authorize();
	}
}
