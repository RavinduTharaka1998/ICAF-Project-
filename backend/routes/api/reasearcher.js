const router = require("express").Router();
let Research = require("../../models/researcher");
const multer = require('multer');
const { Router, request } = require("express");

let filePath = "";
let filename = "";

const fileStorageEngine = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"./ResearchUploads");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"~"+file.originalname);
    }
});

const upload = multer({storage:fileStorageEngine})


router.post('/upload', upload.single("file"), (req,res)=>{
    if(req.file){
        filePath = req.file.path;
        filename = req.file.filename;
    }else{
        filePath="";
        filename="";
    }
});





router.route("/Researchadd").post((req,res) => {

    const name = req.body.name;
    const title = req.body.title;
    const email = req.body.email;
    const contact_no = Number(req.body.contact_no);
    const review_state = req.body.review_state;

    const newResearch = new Research({
        name,
        title,
        email,
        contact_no,
        review_state,
        filePath,
        filename
    })

    newResearch.save().then(() =>{
        res.json("Researches Added")
    }).catch((err) => {
        console.log(err);
    })
})

/*router.route("/").get((req,res) => {

    Research.find().then((researcher) =>{
        res.json(researcher)
    }).catch((err) => {
        console.log(err);
    })
})*/

router.route('/').get(function(req,res){
    let status = "Approved"
    Research.find({$and:[{review_state : status}]},function (err,work){
        if(err)
            console.log(err);
        else
            res.json(work)
    });
});









module.exports = router;