import bodyParser from "body-parser";
import express from "express";
import controller from "./controller/controller.js";
import KafkaConfig from "./config.js";

const app = express();
const jsonParser = bodyParser.json();


//send message - producer
app.post("/api/send", jsonParser, controller.sendMessage);

//consumer
const kafkaConfig = new KafkaConfig();
kafkaConfig.consume("topicOne", (value) => {
    console.log(value)
})



app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});