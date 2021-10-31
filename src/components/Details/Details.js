import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdItem from '../AdItem/AdItem'
import { getAdById } from '../../store/actions'
import classes from './Details.module.css';

function Details(props) {
    let date = [];
    const {item, items} = useSelector((state) => ({
        item:state.ads.ad,
        items: state.ads.ads
    }))
    const dispatch = useDispatch()

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      
    useEffect(() => {
        dispatch(getAdById(Number(props?.match?.params?.id)))
    },[props?.match?.params?.id, dispatch])

    if(!item) return null

    const filterd = [];
    const arrayTitle = item.title.toLowerCase().split(' ')
    const arrayDesc = item.description.toLowerCase().split(' ')

    arrayTitle.forEach((t) => {
        items.forEach(i => {
        if(i.title.toLowerCase().includes(t) || i.description.toLowerCase().includes(t)) {
            filterd.push(i.id)
        }})
    } )
    
    arrayDesc.forEach((t) => {
        items.forEach(i => {
        if(i.title.toLowerCase().includes(t) || i.description.toLowerCase().includes(t)) {
            filterd.push(i.id)
        }})
    } )

    const unique = filterd.filter(onlyUnique);

    for (let i = 1 ; i <= 16; i++) {
        date.push(item.date.split('')[i]);
        if (date.indexOf('T') !== -1) {
            date[date.indexOf('T')] = ' ';
        }
    }

    return (
        <div className={classes.DetailsElements}>
                <div className={classes.AdDetails} key={item.id}>
                    <div className={classes.AdDetailsTitle}>Title: {item.title}</div>
                    <div className={classes.AdDetailsDescription}>Description: {item.description}</div>
                    <div className={classes.AdDetailsDate}>Date Added: {date.join('')} </div>
                </div>
                <div className={classes.SimilarTitle}>Similar announcements:</div>    
                {
                    unique.map(i => {
                        const ad = items.find(it => it.id === i);
                        if (!ad || ad.id === item.id) return null
                        return (
                            <AdItem key={ad.id} item={ad} withoutButtons/>
                        )
                    })
                }
        </div>
    )
}

export default Details
