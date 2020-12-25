const express = require("express");
const bodyParser = require("body-parser");
const {
    urlencoded
} = require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {

    let today = new Date()

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };


    let day = today.toLocaleDateString("en-US", options);



    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});


app.post("/", (req,res) => {
   item= req.body.newItem;

   items.push(item);
  res.redirect("/")
});


app.listen(3000, () => {
    console.log("server is running on port 3000")
})