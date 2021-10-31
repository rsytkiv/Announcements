import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteAd } from '../../store/actions';
import classes from './AdItem.module.css'
const AdItem = ({item, withoutButtons = false}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    
    const handleDelete = (id) => {
        dispatch(deleteAd(id))
    }

    return (
        <div className={classes.Item}>
            <div className={classes.ItemTitle}> {item.title} </div> 
            <div>  </div>
            {
             !withoutButtons && (
               <>
                    <button onClick={() => history.push(`edit-ad/${item.id}`)} className={classes.MainButton}>Edit</button> 
                    <button onClick={() => history.push(`details/${item.id}`)} className={classes.MainButton}>Details</button> 
                    <button onClick={() => handleDelete(item.id)} className={classes.MainButton}>Delete</button>
               </>
            )
            }
        </div>
    )
}

export default AdItem
