import mongoose from 'mongoose'


const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.r1xlz.mongodb.net/QUEEN?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error', error.message);
    }
}

export default Connection;