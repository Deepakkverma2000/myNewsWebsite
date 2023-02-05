const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//let logi = document.getElementById('logi');

require("../db/conn");
const Register = require("../models/register");
const { json } = require("express");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

//console.log(path.join(__dirname,"../public"));

app.use(express.static(static_path));



app.post("/register", async (req, res) => {

    try {

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {
            const userofNews = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: password,
                confirmpassword: cpassword
            })
            // res.sendFile('views/test.html', {root: __dirname })
            const registered = await userofNews.save();
            res.status(201).sendFile(path.join(static_path, '/index.html'));

        } else {

            req.send("password are confirm oassword are not matching");
        }

    } catch (error) {
        res.status(400).send("password and confirm password  are not matching");
    }
})


app.get("/", (req, res) => {
    res.send("This is testing  of project");
})
app.get("/login", (req, res) => {
    res.send("login");
})

app.post("/forgetpage", async (req, res) => {
    try {
        const ufirstname = req.body.firstname;
        const ulastname = req.body.lastname;
        const uemail = req.body.email;
        const useremail = await Register.findOne({ email: uemail });
        if(ufirstname === useremail.firstname && ulastname === useremail.lastname)
        {
            res.status(200).send(useremail.password);
            
        }
        else{
            res.send("Your data are not matching");
        }

    } catch (err) {
        res.status(400).send("information Error");
    }
})

app.post("/login", async (req, res) => {
    try {
        const uemail = req.body.email;
        const password = req.body.password;
        const useremail = await Register.findOne({ email: uemail });
        if (useremail.password === password) {
            // alert("You have succesfully login");
           // logi.innerHTML=`Hello,${useremail.firstname}`;
            res.status(201).sendFile(path.join(static_path, '/index.html'));
            //alert("You have successfully login")
        } else {

            res.send("User Email and Password are both not matching");
        }
    } catch (error) {
        res.status(400).send("Invalid email");
    }

})

app.listen(port, () => {
    console.log(`Server is running  at port no ${port}`);
})