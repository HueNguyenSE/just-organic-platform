import mongoose from 'mongoose';

const connectDB = async function () {
	try {
		const connection = await mongoose.connect(process.env.MONGODB_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.log(`MongoDB Connected to the host ${connection.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
