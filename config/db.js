import mongoose from 'mongoose';
import config from 'config';
import dotenv from 'dotenv';

// loads enviornment variables
dotenv.config();

//Ges the connection string from enviornment variables or config
const db = process.env.MONGO_URI || config.get('mongoURI');

//Connect to MongoDb
const connectDatabase = async () => {
    try {
        await mongoose.connect(db);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);

        //Exit with failure code
        process.exit(1);
    }
};

export default connectDatabase;