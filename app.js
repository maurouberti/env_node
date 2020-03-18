const PATH_ENV = process.env.NODE_ENV.trim() == 'development' ? '.dev.env' : '.env';
console.log(PATH_ENV);

require('dotenv').config({
    path: PATH_ENV
});

console.log(process.env.NODE_ENV);
console.log(process.env.APP_TITLE);
console.log(process.env.SECRET_KEY);
