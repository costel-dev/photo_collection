import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import Title from "./components/Title";
import UploadForm from './components/UploadForm';

function App() {
const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
