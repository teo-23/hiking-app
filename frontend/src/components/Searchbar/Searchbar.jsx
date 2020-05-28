import React, { useEffect, useState } from 'react'
import './searchbar.css'

export default function SearchBar(props) {
    const [value, setValue] = useState('')

    return (
        <div>
            <form action="">
                <input class="search-bar" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            </form>
        </div>
    )
}
