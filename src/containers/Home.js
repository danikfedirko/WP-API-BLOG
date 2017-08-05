import React from 'react'
import createReactClass from 'create-react-class'
import Categories from './Categories'
import Title from '../components/Title'

var Home = createReactClass({
  render () {
    return (
      <div className="home mdl-cell mdl-cell--8-col">
        <p>home</p>
          <Categories/>
      </div>
    )
  }
})

export default Home
