import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAd } from '../../store/actions';
import classes from './Edit.module.css';

function Edit(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const submit = (e) => {
        const newItem = {
            id: Date.now(),
            title,
            description,
            date: JSON.stringify(new Date()),
        };
        dispatch(addAd(newItem))
        setDescription('')
        setTitle('')
        props.history.push("/main")
    } 
    return (
        <div className={classes.EditContainer}>
            <h2 className={classes.CreateTitle}>Create new ad</h2>
            <input type="text" 
                className={classes.EditInput} 
                value={title} 
                onChange={(e) => {setTitle(e.target.value)}} 
                placeholder='Title ..'/>
            <input type="text" 
                className={classes.EditInput} 
                value={description} 
                onChange={(e) => {setDescription(e.target.value)}} 
                placeholder='Description..'/>
            <button type='button' className={classes.EditButton} onClick={submit}>create</button>
        </div>
    )
}

export default Edit
