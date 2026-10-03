import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./config/app.js";

dotenv.config();

console.log("1. Environment variables loaded.");
console.log("PORT value:", process.env.PORT);
console.log("MONGODB_URI value:", process.env.MONGODB_URI);

const startServer = async () => {
    try {
        console.log("2. Attempting database connection...");
        await connectDB();
        console.log("3. Database connection successful!");

        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`4. Server running on port: ${PORT}`);
        });
    } catch (err) {
        console.log("5. Caught error in startServer:", err);
    }
};

startServer();