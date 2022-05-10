import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayLibrary from './Components/DisplayLibrary/DisplayLibrary';
import AddMusic from './Components/AddMusic/AddMusic'
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [music, setMusic] = useState([]);
  
  useEffect(() => {
    getAllMusic();
  }, [])

  async function getAllMusic(){
    let response  = await axios.get('http://127.0.0.1:8000/api/music/');
    setMusic(response.data)
    console.log(music)
  }

  async function createMusic(newMusic){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newMusic);
    if(response.status === 201){
      await getAllMusic();
    }
  }

  async function filterMusic(category, filterData) {
    let response = await axios.get(`http://127.0.0.1:8000/api/music?${category}=${filterData}`);
    setMusic(response.data);
    
  }
  return (
    <div className='Music Library'>
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar filterMusic={filterMusic} music={music}/>
      </div>
      <div >
        <DisplayLibrary parentMusic = {music}/>
      </div>
      <div>
        <AddMusic addMusic={createMusic} />
      </div>
    </div>
  );
}

export default App;
