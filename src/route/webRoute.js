import express from 'express'
import { homeController, buyAssetsList, buyAsset, getDetailBuyList, deleteBuyAsset, hoardingAssets } from '../controllers/homecontroller.js'
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', homeController)
    router.get('/buyAssetsList', buyAssetsList)
    router.post('/buyAsset', buyAsset)
    router.get('/getDetailBuyList/:id', getDetailBuyList)
    router.post('/deleteBuyAsset', deleteBuyAsset)
    router.get('/hoardingAssets', hoardingAssets)
    app.use('/', router)
}
export default initWebRoute