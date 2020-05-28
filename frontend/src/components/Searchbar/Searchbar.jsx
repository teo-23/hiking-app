import React, { useEffect, useState } from 'react'
import './searchbar.css'
import hikingBanner from './hiking-banner.jpeg'

export default function SearchBar(props) {
    const [value, setValue] = useState('')

    return (
        <div class="search-container">
         
                <img id="hiking-banner" src={hikingBanner} alt=""/>
                <form class="centered" action="">
                    <input class="search-bar" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                </form>
         
        </div>
    )   
}
 