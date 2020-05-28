import React from 'react'

export default function Marker(props) {


    return (
        <div>
            <img src="http://placekitten.com/50/50" alt=""/>
            <strong>{props.text}</strong>
            <button>click</button>
        </div>
    )
}
