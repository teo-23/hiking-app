import React, { useEffect, useState } from 'react'
import './searchbar.css'
import hikingBanner from './hiking-banner.jpeg'

export default function SearchBar(props) {
    const [value, setValue] = useState('Walk in freedom')

    return (
                <form  action="">
                    <div class="transparent-wrapper">
                        <input class="search-bar" type="text" value={value} onChange={(e) => setValue(e.target.value)}/> 
                    </div>
                </form>
    )   
}
 