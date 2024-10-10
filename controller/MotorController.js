import db from '../koneksi.js'

export const getMotor = (req, res) => {
    const sql = 'SELECT * FROM motor';

    db.query (sql, (error, result) =>{
       res.send(result)
    });
};

export const getMotorByJenis_Motor= (req, res) =>{
    const {nama_motor,jenis_motor,harga_motor,deskripsi_motor} = req.body
  const sql = "INSERT INTO motor (nama_motor,jenis_motor,harga_motor,deskripsi_motor) VALUES (?,?,?,?)"
  db.query(sql, [nama_motor,jenis_motor,harga_motor,deskripsi_motor], (error,result) =>{
    if(error){
      res.status(400)
      res.send(error)
    }
    res.status(201);
    res.json(result);
    });
};


export const createMotor = (req, res) =>{
  const {nama_motor,jenis_motor, harga_motor, deskripsi_motor } = req.body
  const sql = "INSERT INTO motor (nama_motor,jenis_motor, harga_motor, deskripsi_motor) VALUES (?,?,?,?)"
  db.query(sql, [nama_motor,jenis_motor, harga_motor, deskripsi_motor], (error,result) =>{
    if(error){
      res.status(400)
      res.send(error)
    }
    res.status(201);
    res.json(result);
  })
};

export const updateMotor = (req, res) => {
  const jenis_motor = req.query.jenis_motor;
  const {nama_motor, harga_motor, deskripsi_motor} = req.body;
  if (nama_motor || jenis_motor || harga_motor || deskripsi_motor){
    const query = ` UPDATE motor  SET nama_motor = "${nama_motor}" , harga_motor = "${harga_motor}" , deskripsi_motor = "${deskripsi_motor}"  WHERE jenis_motor = ${jenis_motor}`;
    db.query(query, (error, result) => {
      if(error) res.status(400).send(error.message);

      res.json(result);
    })
  }
};



export const deleteMotor = (req, res) =>{
  const nim = req.query.nim
  const sql = "DELETE FROM motor WHERE jenis_motor = ?"
  db.query(sql, [nim], (error,result)=>{
    if(error){
      res.status(400)
      res.send(error)
    }
    res.status(200)
    res.json("data berhasil dihapus")
  } )
}



