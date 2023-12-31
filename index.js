import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";



const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any?type=single";

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) =>{
    res.render("index.ejs")
});

app.get("/selector", (req, res) =>{
    res.render("selector.ejs")
});

app.post("/selectedjoke", (req, res) =>{
    const data = response.data.body
    console.log(data)
    res.render("index.ejs")
});

app.get("/contact", (req, res) =>{
    res.render("contact.ejs")
});


app.get("/getjoke", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        res.render("index.ejs", {joke: response.data.joke, category: response.data.category} )
    }catch (error){
        res.status(500);
    };
});

app.listen(port, () => {
    console.log(`server is running on port ${port}.`)
})