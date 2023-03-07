import mongoose from "mongoose";

const connectDB = async function() {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`MongoDB Connected to the host ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
// {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
// }
