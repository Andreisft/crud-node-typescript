import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({
        extended: true
    })
);

app.use(routes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});