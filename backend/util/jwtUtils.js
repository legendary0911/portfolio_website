import jwt from 'jsonwebtoken';

// export const verifyToken = (req, res, next) => {
//     const token = req.cookies.accessToken

//     if (!token) {
//         return res.status(401).json({ success: false, message: "You're not authorize no token" })
//     }

//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
//         if (err) {
//             return res.status(401).json({ success: false, message: "invalid token" })
//             // return res.status(200).json({ success: true, message: user.admin })

//         }

//         req.user = user
//         next()
//     })
// }


export const verifyUser = (req, res, next) => {
    const token = req.cookies.accessToken

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
    const token = req.cookies.accessToken

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