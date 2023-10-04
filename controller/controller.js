import KafkaConfig from "../config.js";

const sendMessage = async(req, res) => {
    try{
        const {message} = req.body;
        const kafkaConfig = new KafkaConfig();
        const messages = [
            { key: 'key1', value: message}
        ];

        //producer with topic
        kafkaConfig.produce("topicOne", messages);


        res.status(200).json({
            status: "OK",
            message: "Message was sent successfully"
        });

    }
    catch(err){
        console.log(err);
    }
}

const controller = {
    sendMessage
}


export default controller;

