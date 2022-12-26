const express = require("express");
const app= express();


const db = require("./db/db");
const daySchema = require("./models/DaySchema");
const vocasSchema = require("./models/VocasSchema");


const cors = require("cors");
const { response } = require("express");
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("port",process.env.PORT || 5000);
const PORT = app.get("port");

app.get("/",(req,res)=>{
    res.send("000000000")
})


app.get("/days", (req, res) => {
    
     res.send("days  ");
   
    /*
    daySchema.find().then((response)=>{
        res.send("디비연결성공")
        //console.log(response)
        res.json(response);
    }).catch((err)=>{
        res.send("디비연결실패")
        console.log(err);
    })
    */
    
});


app.post("/days",(req,res)=>{
    console.log(req.body);


    const {id} = req.body;
    const {day} = req.body;
    const insertDay = new daySchema({
        id:id,
        day:day,
    })
    insertDay.save()
    .then(()=>{
        console.log("day 잘들어갔습니다.")
        res.json({state:"ok"})
    })
    .catch((err)=>{
        console.log("day err")
    })

})


app.post("/vocas",(req,res)=>{

    const {day,kor,eng,done} = req.body;
    console.log(req.body)
    console.log(day)
    
    const insertVocaItem = new vocasSchema({
        day ,kor , eng, done 
    });
    insertVocaItem.save().then(()=>{
        console.log("voca 잘들어갔습니다.")
        res.json({state:"ok"})
    })
    .catch((err)=>{
        console.log("voca err")
    })
    

});


app.get("/vocas",(req,res)=>{
    //console.log(req.query);
    const {day} = req.query;
    vocasSchema.find({day:day})
    .then((response)=>{
        //console.log(response)
        res.json(response)
    })
})

app.get("/vocas/:day",(req,res)=>{
    console.log(req.params);
})


app.delete("/vocas/:id",(req,res)=>{
    const {id} = req.params;
    vocasSchema.deleteOne({_id:id})
    .then((response)=>{
        //console.log(response)
        res.json({state:"ok"})
    })
    .catch((err)=>{
        console.log(err)
    })
    
})



app.put("/vocas/:id",(req,res)=>{
    const {id} = req.params;

    vocasSchema.updateOne({_id:id},{
        $set:{done:req.body.done}
    })
    .then((response)=>{
        //console.log(response)
        res.json({state:"ok"})
    })
    .catch((err)=>{
        console.log(err)
    })

})



app.listen(PORT, ()=>{
    console.log(PORT + " : 포트에서 노드 서버 대기중")
});
