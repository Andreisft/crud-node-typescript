export const createUserbyId = `
    INSERT INTO 
    users (cpf, name, age, phone)
    VALUES ($1, $2, $3, $4)
`;

export const selectUserbyId = `
    SELECT *
    FROM users
`;

export const updateUserbyId = `
    UPDATE users
    SET cpf=$1, name=$2, age=$3, phone=$4
    WHERE id=$5
`;

export const removeUserbyId = `
    DELETE
    FROM users
    WHERE id=$1
`;