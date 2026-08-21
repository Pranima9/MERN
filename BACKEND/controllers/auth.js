import db from "../database/db.js";
import bcrypt from "bcryptjs"

export const login = (req,res) => {
    const{email, password} = req.body;

    // try{
        const q ="select * from user where email = ?";

        db.query(q,[email], (error, result) => {
            if (error) {
                return res
                .status(500)
                .send({message: "Error while executing query.", error });
            }

            if (result.length === 0 ) {
                return res.send({message: "User not found"});
            }

            const isPasswordMatch = bcrypt.compareSync(password, result[0].password);

            if (isPasswordMatch) {
                const token = jwt.sign (
                    {
                        id: result[0].id,
                        role: result[0].role_id,
                        email: result[0].email,
                    },
                    "secretkey",
                );

                const {password, ...others} = result[0];

                return res.statud(200),send({
                    message: "user login successfully",
                    user: others,
                    token: token,
                });
            }

            return res.status(400).send ({message: "email or password not matched."});
        });
    // } catch (err) {
    //     console.log(err);
    // }
};