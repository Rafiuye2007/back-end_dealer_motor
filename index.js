import express from "express";
import db from './koneksi.js';
import bodyParser from "body-parser";
import router from "./route.js";

const app = express()

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // res.send("");
  const sql = 'SELECT * FROM motor'
  db.query(sql, (error, result) => 
  res.json(result)
    
    )
})



app.post("/create", (req,res) => {
    const {nama_motor,jenis_motor, harga_motor,deskripsi_motor } = req.body
    const sql = "INSERT INTO motor(nama_motor,jenis_motor,harga_motor, deskripsi_motor) VALUES (?,?,?,?)"
    db.query(sql, [nama_motor,jenis_motor,harga_motor,deskripsi_motor], (error,result) =>{
      if(error){
        res.status(400)
        res.send(error)
      }
      res.status(201);
      res.json(result);
    })
  })

  app.use("/", router)

app.listen(3007, () => {
    console.log("server berjalan di port:3007")
})