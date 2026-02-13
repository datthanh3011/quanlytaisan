import express from 'express'
import { homeController } from '../controllers/homecontroller.js'
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', homeController)
    app.use('/', router)
}
export default initWebRoute