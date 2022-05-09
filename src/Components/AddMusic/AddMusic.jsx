import React, { useState } from 'react'

const AddMusicForm = (props) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setRelease_Date] = useState('')
    const [genre, setGenre] = useState('')
    const [likes, setLikes] = useState(0)

    function handleSubmit(event) {
        event.preventDefault();
        let newMusic = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
            likes: likes
        }
        console.log(newMusic)
        props.addMusic(newMusic)
    }
}