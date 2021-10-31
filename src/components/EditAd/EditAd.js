import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { editAd, getAdById } from '../../store/actions'
import classes from './EditAd.module.css';

const EditAd = (props) => {
    const dispatch = useDispatch()
    const { ad } = useSelector(state => ({ad: state.ads.ad}))
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        dispatch(getAdById(Number(props?.match?.params?.id)))
    },[dispatch, props?.match?.params?.id])

    useEffect(() => {
        if(!ad) return
        setTitle(ad.title)
        setDescription(ad.description)
    },[ad])

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleEdit = (e) => {
        dispatch(editAd({...ad, title, description}))
        props.history.push('/main')
    }
    return (
        <div className={classes.EditContainer}>
            <h2 className={classes.EditAdTitle}>Editing ad with id <strong>{ad?.id}</strong></h2>
            <input name="title" className={classes.EditInput} value={title} onChange={handleChangeTitle}/>
            <input name="description" className={classes.EditInput} value={description} onChange={handleChangeDescription}/>
            <button type='button' className={classes.EditButton} onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default EditAd
