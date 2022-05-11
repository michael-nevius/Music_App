import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayLibrary from './Components/DisplayLibrary/DisplayLibrary';
import AddMusic from './Components/AddMusic/AddMusic'
import SearchBar from './Components/SearchBar/SearchBar'

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

  async function deleteMusic(music){
    let musicToDelete = [music];
    setMusic(musicToDelete);
    let response = await axios.delete('http://127.0.0.1:8000/api/music/', musicToDelete);
    if (response.status ===201){
      await getAllMusic()
    }
  }

function filterMusic(filter){
    if (music.filter(element => element.album === filter).length > 0){
    let tempMusic = music.filter(element => element.album.includes(filter));
    setMusic(tempMusic);
    }
    else if (music.filter(element => element.artist === filter).length > 0){
    let tempMusic = music.filter(element => element.artist.includes(filter));
    setMusic(tempMusic);
    }
    else if (music.filter(element => element.genre === filter).length > 0){
    let tempMusic = music.filter(element => element.genre.includes(filter));
    setMusic(tempMusic);
    }
    else if (music.filter(element => element.release_date === filter).length > 0){
    let tempMusic = music.filter(element => element.release_date.includes(filter));
    setMusic(tempMusic);
    }
    else if (music.filter(element => element.title === filter).length > 0){
    let tempMusic = music.filter(element => element.title.includes(filter));
    setMusic(tempMusic);
    }
  else{
    alert('That search does not match anything on the library please try again')
  }
  }


  return (
    <div className='container-fluid'>
      <div className='border_box'>
        <div className='d-flex justify-content-center'>
        <SearchBar filterMusic={filterMusic} />
      </div>
      </div>
      <div className='border_box'>
        <div className='d-flex justify-content-center'>
        <DisplayLibrary music={music} deleteMusic={deleteMusic} />
      </div>
      </div>
      <div className='border_box'>
        <div className='d-flex justify-content-center'>
        <AddMusic addMusic={createMusic} />
      </div>
      </div>
     
   </div> 
  );
}

export default App;