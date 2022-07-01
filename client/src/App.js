import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
// import FileUpload from './components/FileUpload'
import FileUpload from  './components/FileUploads1'
import CatsList from './components/CatsList';

function App() {
  return (
    <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      Cute Cat Pictures Upload
    </h4>

    <FileUpload />
    <CatsList />
  </div>
  );
}

export default App;
