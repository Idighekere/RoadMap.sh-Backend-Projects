// const base64 = require('base-64')
const dotenv = require('dotenv')
dotenv.config()

const decodeCredentials = (authHeader) => {
    //Basic YWRtaW46YWRtaW4=
    const encodedCredentials = authHeader.trim().replace(/Basic\s+/i, '')
    // console.log(authHeader)

    const decodedCredentials = atob(encodedCredentials)

    // console.log(decodedCredentials)

    return decodedCredentials.split(':')
}

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Admin Area"');

        return res.status(401).render('error', { message: 'Authentication is required' });
    }
    // console.log(process.env)
    const [username, password] = decodeCredentials(authHeader)
    if (username == process.env.USER_NAME && password == process.env.PASSWORD) {
        return next()
    }

    res.set('WWW-Authenticate', 'Basic realm="Admin Area"')
    res.status(401).send('Authentication required.')

}

module.exports = authMiddleware
