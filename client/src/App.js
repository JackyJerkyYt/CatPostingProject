import logo from './logo.svg';
import React, {Component, useEffect, useState} from 'react'
import './App.css';
import FileUpload from './components/FileUpload'
import CatsList from './components/CatsList';
import axios from 'axios';


function App() {

  const [listOfCats, setListOfCats] = useState([])
  const [disableButton, setDisableButton] = useState(true)

  useEffect(() => {
    axios.get('https://honest-eh-59020.herokuapp.com')
            .then(response => {
               setListOfCats([...response.data].reverse())
            })
            .catch(error => {
                console.log(error)
            })
  })

  useEffect(() => {
    if(listOfCats.length > 0){
      setDisableButton(false)
    }
  }, [listOfCats])

  return (
    <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      Post Your Cute Cats!
    </h4>
    <FileUpload disableButton={disableButton}/>
    <CatsList listOfCats={listOfCats}/>
  </div>
  );
}

export default App;
