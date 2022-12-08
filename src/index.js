import app from "./app";
import "./utils/mongoose";



var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);

