import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send({message: "Please Login First..."});
    }

    
  const verify = jwt.verify(token, "secretkey");
  console.log(verify);

  req.userRole =
    verify.role === 1
      ? "Admin"
      : verify.role === 2
        ? "Manager"
        : verify.role === 3
          ? "Staff"
          : verify.role === 4
            ? "User"
            : null;

  next();

};


// complete