import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ImageInput from "./components/image_input/image_input";
import ImageUploader from "./service/image_uploader";
import QuizRepository from "./service/quiz_repository";

const quizRepository = new QuizRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} quizRepository={quizRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);
