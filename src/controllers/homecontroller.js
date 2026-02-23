import console from "node:console"
import { getBuyAssetsList, getAsset, addBuyAsset, getDetailBuyAsset, deleteBuy } from "../models/getDataBase.js"
let homeController = async (req, res) => {
    let data = await getAsset()
    return res.render('homePage.ejs', { data: data })
}
let buyAssetsList = async (req, res) => {
    let data = await getBuyAssetsList()
    return res.render('buyAssetsList.ejs', { data: data })
}
let buyAsset = async (req, res) => {
    let data = await req.body
    await addBuyAsset(data)
    return res.redirect("/")
}
let getDetailBuyList = async (req, res) => {
    const id = req.params.id
    const [data] = await getDetailBuyAsset(id)
    return res.render('detailBuyGoldList.ejs', { data: data, formatVND: formatVND })
}
const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
};

let deleteBuyAsset = async (req, res) => {

    const status = await deleteBuy(Number(req.body.idDetail))
    if (status == "done") {
        return res.redirect("/buyGoldList")
    }

}
let hoardingAssets = async (req, res) => {
    let dataBuyAsets = await getBuyAssetsList(1)
    let totalQuantity = dataBuyAsets.reduce((sum, item) => {
        return sum + Number(item.soluong)
    }, 0)
    let totalPrice = dataBuyAsets.reduce((sum, item) => {
        return sum + (Number(item.giamua) * Number(item.soluong))
    }, 0)
    let avgPrice = totalPrice / totalQuantity
    let remainingQuatity
    console.log(totalQuantity)
    console.log(totalPrice)
    console.log(avgPrice)
    return res.render("hoardingAssets.ejs", { data: JSON.stringify(dataBuyAsets) })
}
export {
    homeController, buyAssetsList, buyAsset, getDetailBuyList, formatVND, deleteBuyAsset, hoardingAssets
}