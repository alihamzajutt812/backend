import dotenv from "dotenv";
import connectDB from "./db/index.js"; // Ensure the path is correct

// Load environment variables from the specified .env file
dotenv.config({
    path: './env' // Use a colon instead of equals sign
});

// Connect to the database
connectDB();

// Import express
import express from "express"; 
const app = express();

// Start the server
(async () => {
    try {
        // Establish the database connection
        await connectDB(); // Only call this if connectDB is not already called above

        app.on("error", (error) => {
            console.error("Server error:", error);
            // Handle error appropriately
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`); // Fixed interpolation
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1); // Exit the process if there's an error
    }
})();
