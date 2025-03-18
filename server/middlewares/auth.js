import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers; //this setting of token in headers will be done by frontend

  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token, authorization denied Login Again" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id) {
      req.body.userid = decoded.id;
    } else {
      return res.json({ msg: "Token is not valid" });
    }
    next();
  } catch {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default userAuth;
