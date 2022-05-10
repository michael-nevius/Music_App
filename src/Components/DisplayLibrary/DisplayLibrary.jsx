import './DisplayLibrary.css';
import React from 'react';


const DisplayLibrary = (props) => {
    return (
        <div>
            <h3>MUSIC LIBRARY</h3>
            <table className="table">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Artist</th>
                    <th scope='col'>Album</th>
                    <th scope='col'>Release Date</th>
                    <th scope='col'>Genre</th>
                    <th scope='col'>Likes</th>
                </tr>
            </thead>
            <tbody>
                {props.parentMusic.map((music, element) => {
                    return(
                        <tr key={element}>
                            <td>{element +1}</td>
                            <td>{music.title}</td>
                            <td>{music.artist}</td>
                            <td>{music.album}</td>
                            <td>{music.release_date}</td>
                            <td>{music.genre}</td>
                            <td>{music.likes}</td>
                            <td><button onClick={() => props.likeSong(music.id)}>Like</button></td>
                            <td><button onClick={() => props.deleteSong(music.id)}> Delete Song</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default DisplayLibrary