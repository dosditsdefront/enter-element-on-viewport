// vite.config.js
import { resolve } from 'path'

export default {
    plugins: [],
    build:{
        rollupOptions:{
            input:{
                index:resolve(__dirname,'index.html')
            }
        }
    }
}