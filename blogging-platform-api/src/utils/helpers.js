const generateRandomString = (length = 3) => {

    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''

    for (let i = 0; i < length; i++) {

        result += chars.charAt(Math.floor(Math.random() * chars.length))

    }
    return result
}

export { generateRandomString }
