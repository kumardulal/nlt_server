const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./Connectiondb')
const port = process.env.PORT || 3001;
const Calculation = require('./Calculations')

const currentDate = Calculation.dateTime()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



//root server 
app.get('/', (req, res) => {

    res.send("<div height:500px,width:500px,background_color:green ><br/><p>This is how server looks </p><div>")

})

//message_post 
app.post("/message_post", (req, res) => {
    const sendername = req.body.sendername
    const senderidentity = req.body.senderidentity;
    const messagesubject = req.body.messagesubject;
    const message = req.body.message;

    const messagedate = currentDate;
    const sqlInsert = "INSERT INTO message (sendername,senderidentity, messagesubject,message,messagedate) VALUES(? ,? ,?,?,?);"
    db.query(sqlInsert, [sendername, senderidentity, messagesubject, message, messagedate], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(result)
            res.send("file was loaded and delivered from server")
        }
    })
})

//product_get
app.get('/project_get', (req, res) => {
    const sqlGet = "SELECT * from project;"
    db.query(sqlGet, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })

})


//blog_get
app.get('/blog_get', (req, res) => {
    const sqlGet = "SELECT * from blogs;"
    db.query(sqlGet, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })

})


//listing the port if it is running
app.listen(port, () => {
    console.log("running on port 3001-New Leaders tech");
})
