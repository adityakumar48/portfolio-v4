const express = require('express');
const {Client} = require('@notionhq/client')
const cors = require('cors')
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
require('dotenv').config()

const app = express();

app.use(cors());

const PORT = 8000;


const notion = new Client({auth:process.env.SECRET});

const databaseid = process.env.DATABASEID;

// POST request

app.post('/submitform',jsonParser,async(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    try{    
        const response = await notion.pages.create({
            parent:{database_id:databaseid},
            properties:{
                Name:{
                    title:[
                        { 
                            text:{
                                content: name
                            }
                        }
                    ]
                },
                Email:{
                    rich_text:[
                        { 
                            text:{
                                content: email
                            }
                        }
                    ]
                },
                Message:{
                    rich_text:[
                        { 
                            text:{
                                content: message
                            }
                        }
                    ]
                },

            }
        })
        console.log(response);
        console.log(`Success`);
    }catch(error){
        console.log(error);
    }
})

app.listen(PORT,()=>{
    console.log(`Starting proxy at ${PORT}` );
})