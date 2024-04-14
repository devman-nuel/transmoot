import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Replace 'YOUR_UPLOAD_ENDPOINT' with your actual upload endpoint
      const response = await axios.post('YOUR_UPLOAD_ENDPOINT', formData);

      // Handle successful upload
      console.log('File uploaded successfully:', response.data);
      // You can do further processing here, like updating state or displaying a success message
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
