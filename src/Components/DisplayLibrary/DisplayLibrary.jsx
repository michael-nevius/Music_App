import './DisplayLibrary.css';


const DisplayLibrary = (props) => {
    return (
        <table class="table table-boardered">
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
                            <td>{music.id}</td>
                            <td>{music.title}</td>
                            <td>{music.artist}</td>
                            <td>{music.album}</td>
                            <td>{music.release_date}</td>
                            <td>{music.genre}</td>
                            <td>{music.likes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default DisplayLibrary