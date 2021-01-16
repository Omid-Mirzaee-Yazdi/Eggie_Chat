import React from 'react'

function Message(props) {
    const clr={
        color: props.colormsg,
    }
    return (
        <div>
            <p style={clr}>{props.cont}</p>
        </div>
    )
}

export default Message
