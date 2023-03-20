    /*  This function is used verify a google account
    */

require("dotenv/config"); // configure reading from .env
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");


    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(GOOGLE_CLIENT_ID);

    async function verifyGoogleToken(token) {
    try {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
    } catch (error) {
    return { error: "Invalid user detected. Please try again" };
    }
    }

    module.exports = verifyGoogleToken