import express from "express";
import bodyParser from "body-parser";

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({
        extended: true
    })
);

app.get("/", (_: express.Request, res: express.Response) => (res.send("In Work!")));

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});