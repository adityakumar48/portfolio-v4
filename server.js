const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

const notion = new Client({ auth: process.env.SECRET });

const databaseid = process.env.DATABASEID;

// Deployment

const __dirname1 = path.resolve();
if(process.env.NODE_ENV == "production"){

  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname1, 'client', 'build', 'index.html'));
  
  })

}else{
  app.get("/",(req,res) =>{
    res.send("API is Running Successfully");
  })
}


// POST request

app.post("/submitform", jsonParser, async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseid },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log(`Success`);
  } catch (error) {
    console.log(error);
  }
});



app.listen(PORT, () => {
  console.log(`Starting proxy at ${PORT}`);
});
