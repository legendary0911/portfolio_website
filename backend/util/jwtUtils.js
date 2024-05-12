import jwt from 'jsonwebtoken';

export const verifyUser = (req, res, next) => {
    const token = req.body.token

    if (!token) {
        return res.status(401).json({ success: false, message: "You're not authorize no token" })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "invalid token" })
        } else {
            next()
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    const token = req.body.token

    if (!token) {
        return res.status(401).json({ success: false, message: "You're not authorize no token" })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "invalid token" })
        } else {
            if (user.admin) {
                next()
            } else {
                return res.status(401).json({ success: false, message: "You're not admin" })
            }
        }
    })
}