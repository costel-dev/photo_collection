import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  // declare a state to save our uploaded file
  const [file, setFile] = useState(null);
  // declare a statte for the errors
  const [error, setError] = useState(null);
  //create an array of allowed types of file
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0]; // we are selecting first file
    // check if the file exist and the type matches
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div className="succes"> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
