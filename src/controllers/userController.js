//model import
import Users from '../models/userModel';

//error middleware
import ApiError from '../utils/apiError';

const newUser = async (req, res, next) => { //handler for new user after signup
    let newEmail = req.query.email
    
    const userEmail = await Users.findOrCreate({
        where: {
            email: newEmail
        }})
        .catch(next(ApiError.badRequest(err.message)))
}

export default newUser;