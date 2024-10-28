import {env} from "../utilits/env"
const mongoose = require('mongoose');

const initMongoConnection = async () => {
  try {
    const dbUrl = process.env.MONGODB_URL;
    const dbName = process.env.MONGODB_DB;
    const user = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;

    await mongoose.connect(`mongodb+srv://${user}:${password}@${dbUrl}/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection failed:', error);
    process.exit(1);
  }
};

module.exports = { initMongoConnection };
