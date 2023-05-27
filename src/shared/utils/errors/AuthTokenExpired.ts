export class AuthTokenExpired extends Error {
    constructor(message = "Auth token is expired!") {
        super(message);
    }
}
