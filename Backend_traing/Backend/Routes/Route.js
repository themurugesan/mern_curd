const formdata = require("../Components/formdata");
const getformdata = require("../Components/getformdata");
const getmuthu = require("../Components/getmuthu");
// const Getsuccessdata = require("../Components/Getsuccessdata");
// const Postdata = require("../Components/Postdata");

const router = require("express").Router();

let data=[]

router.route("/data").post((req, res) => {
    const { name, dob, email } = req.body;

   
    const newRecord = { id: Date.now(), name, dob, email };
    console.log(newRecord)
    data.push(newRecord);

   
    res.json({ msg: 'Record  post added successfully', record: newRecord });
});


router.route("/getdata").get(
    (req, res) => {
        res.json(data); 
    });
// router.route("/getdata").get(getmuthu)

module.exports = router;