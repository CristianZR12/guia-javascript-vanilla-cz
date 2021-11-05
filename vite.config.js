import { config } from 'dotenv';
config();
import { defineConfig } from 'vite';


export default defineConfig({
    server: {
        port: process.env.PORT || 4200
    }
});