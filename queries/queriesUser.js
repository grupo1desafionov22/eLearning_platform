const queries = {
    createUser:`
    INSERT INTO users(email, password)
    VALUES ($1,$2);
    `,
    validatedUser:`
    SELECT *
    FROM users
    WHERE email = $1 AND password = $2;
    `
}
module.exports = queries;