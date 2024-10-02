import mongoose from "mongoose";

const connectToDB = async () => {
    const url = 'your-mongodb-url';

    mongoose.connect(url).then(() => { console.log('Connected to DB') }).catch((err) => { console.log(err) });

};

export default connectToDB;
