// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <p id='one'>Name: Pranav Sharad Yeole</p>
                <p id='two'>Email: pranav@google.com</p>
                <p id='four'>Phone: 8546465544</p>
                <p id='three'>Address: ABC, xyz street.</p>
            </div>
        )
    }
}
