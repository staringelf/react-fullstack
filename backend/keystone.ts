import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/react-fullstack';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in  
  secret: process.env.COOKIE_SECRET,
}