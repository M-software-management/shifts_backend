import { db } from "../db.js";

export const Getworks = (req, res) => {
    const q = "SELECT * FROM sfhs.Location;"
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data);
    });
  };


  export const Getwork = (req, res) => {
    const q = "SELECT * FROM sfhs.Location WHERE location_uid=?;"
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };


  export const Addwork = (req, res) => {
    const q = "INSERT INTO sfhs.Location (`Name`,`admin_id`) VALUES (?)"
    const values = [
      req.body.name,
      req.body.admin,
    ];

    db.query(q, [values], (err, data)=> {
      if(err) return res.json(err)
      return res.json("Location has been created")
    })
  }