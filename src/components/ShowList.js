import React from 'react'

const ShowList = (props) => {
    console.log(props.data);
    return (
        <div>
            
            <h1>{props.data}</h1>
        </div>
    )
}

export default ShowList
