import './App.css';
import axios from 'axios';
import DisplayLibrary from './Components/DisplayLibrary/DisplayLibrary';
import React, { useState, useEffect } from 'react';


function App() {
  const [music, setMusic] = useState([]);
  
 
  
  useEffect(() => {
    getAllMusic();
  }, [])
  
  
  
  async function getAllMusic(){
    try{
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setMusic(response.data);
    console.log(response.data)
  }
  catch (ex) {
    console.log('there is an error', ex)
  }
  }
  return (
    <div>
      <div>
        <h1>Music Library</h1>
        <DisplayLibrary music={music}/>
      </div>
    </div>
  );
}
export default App;
