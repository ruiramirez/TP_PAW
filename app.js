var express = require("express");
var path = require("path");
var bodyParser = require("body-parser"); //para ser possível pegar nos dados de um form
var cors = require("cors"); //npm install cors, para permitir pedidos de outros dominios (pode não ser necessário para a app)
var passport = require("passport");
var mongoose = require("mongoose");
var config = require("./config/database");
var app = express();

const userRouter = require("./routes/user");

app.use(cors()); //CORS middleware, ver página do npm cors
app.use(bodyParser.json()); //bodyParser Middleware
app.use(express.static(path.join(__dirname, "public"))); //pasta para serrvir ficheiros estáticos, tipo imagens

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.listen(3000, () => console.log("Server Started"));

app.use("/user", userRouter);
