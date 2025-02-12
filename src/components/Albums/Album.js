import React, {useContext, useEffect, useState} from "react"
import {GlobalContext} from "../App";

import {useParams} from 'react-router-dom'
import PhotoCard from "../photos/PhotoCard";

const Album = () => {

    const {photos, getPersonById, getAlbumById} = useContext(GlobalContext)
    const {id} = useParams()

    const [album, setAlbum] = useState(getAlbumById(+id))
    const [person, setPerson] = useState(null)
    const [albumPhotos, setAlbumPhotos] = useState (photos.filter(p => p.albumId === +id))

    useEffect( () => {
        if (album) {
            setPerson( getPersonById(album.personId) )
        }
    }, [album] )

const renderAlbum = () => {
        if (!album || !person) {
            return (<div>Loading ... </div>)
        }
        return (<div className="Container">
            <h1>{album.title}</h1>
            <h2>by {person.lName} {person.fName}</h2>
            <div className='row'>
                {albumPhotos.map( photo => <PhotoCard key={photo.id} photo={photo} />)}
            </div>
        </div>)
}

    return renderAlbum()
}

export default Album
