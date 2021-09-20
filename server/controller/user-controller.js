import user from '../model/UserSchema.js'



export const userSignup = async(request, response) => {

    try {
        const exist = await user.findOne({ username: request.body.username });
        if (exist) {
            return response.status(401).json('username already exist');
        }
        const User = request.body;
        const newUser = new user(User);
        await newUser.save();

        response.status(200).json('user is successfully registered');
    } catch (error) {
        console.log('Error', error.message);
    }
}
export const userLogin = async(request, response) => {

    try {
        let User = await user.findOne({ username: request.body.username, password: request.body.password });
        if (User) {
            return response.status(200).json(`${request.body.username} login successfully`);
        }
        return response.status(401).json('username or password incorrect');
    } catch (error) {
        console.log('Error', error.message);
    }
}