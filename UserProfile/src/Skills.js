// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div className='skill'>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAvaScript</li>
            <li>React</li>
            <li>Code</li>
        </ul>
      </div>
    )
  }
}
