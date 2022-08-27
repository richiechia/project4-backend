import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import path from 'path';
import dotenv from 'dotenv';
import AllRouters from './routes/routes.all.mjs';
import cors from 'cors';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

// Need this for cookies
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

//lol

// Initialise Express instance
const app = express();
// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));
// Expose the files stored in the distribution folder
app.use(express.static('dist'));
app.use(cors(corsOptions));

// Bind route definitions to the Express application
const routers = [AllRouters];
routers.forEach((router) => app.use('/', router));

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`App running at localhost:${PORT}`);
});
