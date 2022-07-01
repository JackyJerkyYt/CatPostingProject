import React, { Fragment, useEffect, useState } from 'react';
import Message from './Message';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


const CatsList = () => {

    const [listOfCats, setListOfCats] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080')
        .then(response => {
           setListOfCats([...response.data])
        })
        .catch(error => {
            console.log(error)
        })
    })

    return(
        <div>
            {(listOfCats.length > 0) ? listOfCats.map((cats) => {
              return (    
                    <Card className = "card card-body mb-3">
                     <img src = {'http://localhost:8080/image/' + cats.filename } alt= "" />
                    </Card>
              )
            }) : 
            <div></div>}
        </div>
    )
}
        

export default CatsList;