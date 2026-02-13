import express from 'express'
import initWebRoute from './route/webRoute.js';
import configViewEngine from './configs/viewEngine.js';
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app)
initWebRoute(app)

app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:3000')
    console.log("<<<<<<<<Port ", process.env.PORT)
})