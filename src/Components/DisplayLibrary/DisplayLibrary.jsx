import './DisplayLibrary.css';
import React from 'react';


const DisplayLibrary = (props) => {

      
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                    <th>#</th>    
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {props.music.map((music, element) => {
                        return (
                            <tr key={element}>
                                <td>{element +1}</td>
                                <td>{music.title}</td>
                                <td>{music.artist}</td>
                                <td>{music.album}</td>
                                <td>{music.release_date}</td>
                                <td>{music.genre}</td>
                                <td>{music.likes}</td>
                                <td><button>like</button></td>
                                <td><button>delete</button></td>
                            </tr>
                        )
                    }
                    )}
             
                </tbody>
            </table>
        </div>

        
    );}
 
export default DisplayLibrary;