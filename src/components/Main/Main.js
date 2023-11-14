import React, { useState } from 'react'
import { useSelector  } from 'react-redux';

import AdItem from '../AdItem/AdItem';

import classes from './Main.module.css';

const Main = () => {
    const [search, setSearch] = useState('');
    const items = useSelector((state) => state.ads.ads)

    const filteredItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className={classes.Container}>
            <input
                type='text'
                className={classes.SearchInput}
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className={classes.Posts}>
                {items && filteredItems.map(item => <AdItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default Main;
