import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  server:{
    host:true , 
    strictPort: true , 
    port : 86,
    proxy :{
      '/api':{
        target : 'http://localhost:3007' ,
        secure : false
      },
    },
  } ,
  plugins: [react()],
})
