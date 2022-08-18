const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "../../ENV/.env" });
const bodyParser = require('body-parser')
const multer = require('multer')
const cors = require('cors')

const corsOrigin = 'http://localhost:3000';

app.use(express.static(__dirname + '../..'))
app.use(cors({
  origin: [corsOrigin],
  methods: ['POST'],
  credentials: true
}))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use(bodyParser.json())

const imageUploadPath = 'C:/Users/inirm/OneDrive/Desktop/Mission ready/Submissions/AdvanceSoftwareDev/mission2/Mission-1-Adv/src/uploadedImages'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, `${file.originalname}`)
  }
})

const imageUpload = multer({storage: storage})

app.post("/car", imageUpload.array('file'), (req, res) => {

  let uploadedFilePath = req.files[0].destination + '/' + req.files[0].originalname

  // console.log('Request: ', uploadedFilePath)

  const projectId = process.env.PROJECT_ID;
  const location = "us-central1";
  const modelId = process.env.MODEL_ID;
  const filePath = `${uploadedFilePath}`;

  const { PredictionServiceClient } = require("@google-cloud/automl").v1;
  const fs = require("fs");

  const client = new PredictionServiceClient({
    keyFilename: "./carrecognizer-359522-41396db63726.json",
  });

  const content = fs.readFileSync(filePath);

  async function predict() {

    const request = {
      name: client.modelPath(projectId, location, modelId),
      payload: {
        image: {
          imageBytes: content,
        },
      },
      params: {
        score_threshold: "0.8",
      },
    };

    const [response] = await client.predict(request);

    for (const annotationPayload of response.payload) {
      res.send(annotationPayload.displayName);
    }
  }

  predict();
});

app.listen(3001, () => {
  console.log('server running at 3001')
});