import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const DB = (file) => {
  
    const onSubmit = (e) => {
      
        try{
            let path = "http://localhost:5000/files/" + file._id
            console.log("hello", path)
            axios.delete(path)
        } catch(err) {
            console.log(err)
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <input type='submit' className='btn btn-primary btn-block mt-4' />
        </form>
    )
}

export default DB;