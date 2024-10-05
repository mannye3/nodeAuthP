import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token; // Assuming you're using cookies to store the token

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the entire decoded token (which should include userId and role) to req.user
        req.user = decoded;

        

        next();
    } catch (error) {
        console.error("Error while verifying token:", error);
        return res.status(401).json({ message: "Token is not valid" });
    }
};
   