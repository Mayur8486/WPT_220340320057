const express = require('express');
const app = require();

const mysql = require('mysql2');
//const cors = require('cors');
//app.use(cors());

const bodyparser = require('body-parser');
const { userInfo } = require('os');
app.use(express.static('abc'));

let params = {
    host: 'localhost',
    user : 'root',
    password :'cdac',
    database:'pleasework',
    port:3306
}

const con = mysql.createConnection(params);

//app.use(bodyparser.json());//support json encoded bodies
//app.use(bodyparser.urlencoded({extended: true}));
//whether you want nested objects support or not



app.get("/mdel",(req, resp) =>
let bookid1 =req.query.bookid;
console.log(bookid1);

let details = { status:false, bookdetails:{}};
con.query('select bookid,bookname,prise from book where bookid=?',[bookid1],
(error  bookrows)=> {
    if(error){
        console.log("error occored" + error);
    }
    else if (bookrows.length>0){
        details.status =true;
        details.bookdetails.bookid =bookrows[0].bookid;
        details.bookdetails.bookname =bookrows[0].bookname;
        details.bookdetails.price =bookrows[0].price;
    }
    console.log(bookrows);
    resp.send(details);
});

app.get("/updatebook",(req,resp)=>
{
    let bookid2 = req.query.bookid2;
    let bookname2 = req.query.bookname2;
    let price2 = req.query.price2;
    console.log( bookid2+ " " +bookname2 + " " price2);

    let details = {status:false,book:{}};

    con.query('update book set bookname=? where bookid=?',[bookname]
    (error,bookrows)=>{
        if(error){
            console.log("error" +error);    
        }
        else if (bookrows.affectedrows>0){
            details.status = true;

        }
        console.log(bookrows);
        resp.send(details);
    } );

});
 
app.listen(0081,function()
{
    console.log("server port connected to 8081");

});