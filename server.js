const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())
app.get("/odin",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/odin.json?slug=odin", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})
app.get("/frigg",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/frigg.json?slug=frigg", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/thor",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/thor.json?slug=thor", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.listen(8080)

