import pool from "../controllers/connectDB.js"

let getBuyAssetsList = async (id = null) => {
    let query = 'select muataisan.id , muataisan.ngaymua, muataisan.soluong, muataisan.giamua, muataisan.mota, taisan.tentaisan, loaitaisan.tenloaitaisan from muataisan left join taisan on muataisan.id_taisan = taisan.id left join loaitaisan on taisan.id_loaitaisan = loaitaisan.id '
    let params = []
    if (id) {
        query += "where muataisan.id_taisan = ?"
        params.push(id)
    }
    query += " ORDER BY muataisan.ngaymua DESC"
    let [rows, fields] = await pool.execute(query, params)
    return rows
}
let getSellAssetsList = async (id = null) => {
    let query = 'select bantaisan.id , bantaisan.ngayban, bantaisan.soluong, bantaisan.giaban, bantaisan.mota, taisan.tentaisan, loaitaisan.tenloaitaisan from bantaisan left join taisan on bantaisan.id_taisan = taisan.id left join loaitaisan on taisan.id_loaitaisan = loaitaisan.id '
    let params = []
    if (id) {
        query += "where muataisan.id_taisan = ?"
        params.push(id)
    }
}
let getAsset = async () => {
    let [rows, fields] = await pool.execute('SELECT loaitaisan.tenloaitaisan, taisan.id,taisan.tentaisan FROM qltaisan.taisan join qltaisan.loaitaisan on taisan.id_loaitaisan = loaitaisan.id')
    console.log(rows)
    return rows
}
let addBuyAsset = async (data) => {
    const dateBuyGold = new Date(data.date)
    console.log(data)
    await pool.execute(`INSERT INTO qltaisan.muataisan (id_taisan, ngaymua, soluong, giamua, mota)
    VALUES (?, ?, ?,?,?)`, [Number(data.loaiTaiSan), dateBuyGold, parseFloat(data.soLuong), parseFloat(data.donGia), data.moTa])
}
let getDetailBuyAsset = async (id) => {
    const [row, field] = await pool.execute('select muataisan.id, muataisan.ngaymua, muataisan.soluong, muataisan.giamua, muataisan.mota, taisan.tentaisan, loaitaisan.tenloaitaisan  from qltaisan.muataisan left join qltaisan.taisan on muataisan.id_taisan = taisan.id left join qltaisan.loaitaisan on taisan.id_loaitaisan = loaitaisan.id where muataisan.id = ?', [id])
    return row
}
let deleteBuy = async (id) => {
    await pool.execute(`DELETE FROM muataisan
WHERE id = ?`, [id])
    return "done"
}

export {
    getAsset, addBuyAsset, getDetailBuyAsset, deleteBuy, getBuyAssetsList
}