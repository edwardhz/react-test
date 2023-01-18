import React from 'react';
import LoadingGif from '../assets/gif.gif';

const NotFound = () => {
  return (
    <>
    <div>Not found, 404 :c</div>
    <img src={LoadingGif} alt="gif"/>
    </>
    
  );
}

export default NotFound;