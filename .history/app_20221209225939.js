const express = require("express");

const client = require("./connection");

const exec  = require('child_process').exec;

require('events').EventEmitter.prototype._maxListeners = 100;

const bodyparser = require("body-parser");

const https = require("https");

const mongoose = require("mongoose");

const app = express();

app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(bodyparser.json());

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", async (req, res) => {

  try {

    await client.connect();

    await console.log("Connected to Database");

    const db = client.db("PortfolioManager");

    const col = db.collection("data");

const doc = col.find({});
const val = await doc.toArray();
const obj = JSON.stringify(val, null, 2);
console.log(obj);

var name = val[0].text[4];
var x1 = val[0].secname;
var x2 = val[2].secname;
var x3 = val[3].secname;
var x4 = val[4].secname;
var x5 = val[5].secname;
var x6 = val[1].secname;

var x7 = val[0].text[0];
var x8 = val[0].text[1];
var x9 = val[0].text[2];
var x10 = val[0].text[3];

var x11 = val[2].skills;
var skn = val[2].secname;

var x12 = val[4].experience;
var x13 = JSON.stringify(x12);
var x14 = val[4].secname;

var x15 = val[5].education;
var x16 = JSON.stringify(x15);
var x17 = val[5].secname;

var x18 = val[1].text[0]
var cn = val[1].secname;
var x19 = val[6].footer;
var x20 = JSON.stringify(x19);

var x21 = val[6].secname;

var x22 = val[3].web;
var x23 = JSON.stringify(x22);


var x25 = val[3].software;
var x26 = JSON.stringify(x25);


var x28 = val[3].android;
var x29 = JSON.stringify(x28);


res.render("index", {setname:name,data1:x1,data2:x2,data3:x3,data4:x4,data5:x5,
data6:x6,data7:x1,data8:x7,data9:x8,data10:x9,data11:x10,secn:skn,data:x11,
exp:x13,expid:x14,wrkexp:x14,edu:x16,eduid:x17,educ:x17,cont:x18,contnm:cn,
ftr:x20,ftrid:x21,prj0:x23,prj1:x26,prj2:x29});

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

let port = process.env.PORT;
if(port == null || port == "")
{
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});

module.exports=col;