
const DisplayLibrary = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
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