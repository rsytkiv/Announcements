import React, { useState } from 'react'
import classes from './Main.module.css';
import { useSelector  } from 'react-redux';
import AdItem from '../AdItem/AdItem'

const Main = (props) => {
    const [search, setSearch] = useState('');
    const items = useSelector((state) => state.ads.ads)

    const filtered = items.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    });
    return (
        <div className={classes.Container}>
            <input type='text' className={classes.SearchInput} placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
            <div className={classes.Posts}>
                {items && filtered.map(item => 
                    <AdItem  key={item.id} item={item}/>
                )}
            </div>
        </div>
    )
}

export default Main
