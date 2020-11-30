import React from "react";
import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      // after the download is complete will set the file back to null so that progress bar to dissapear
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      progress
    </div>
  );
};

export default ProgressBar;
