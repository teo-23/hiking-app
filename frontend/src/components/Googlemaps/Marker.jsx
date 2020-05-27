import React from 'react'

export default function Marker(props) {


    return (
        <div>
            <img src="./hiking-icon.png" alt=""/>
            <strong>{props.text}</strong>
        </div>
    )
}
