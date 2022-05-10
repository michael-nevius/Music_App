import './DisplayLibrary.css';
import Buttons from './LikeButton'
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
                            <Buttons/>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default DisplayLibrary