import * as dotenv from 'dotenv';

/* Read environment variables from the .env file */
export default () => {
    dotenv.config({ path: ".env" });
};