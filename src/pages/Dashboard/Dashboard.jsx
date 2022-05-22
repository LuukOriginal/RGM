import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import Cog from '../../images/icons/settings.svg'
import Database from '../../images/icons/database.svg'
import LeftArrow from '../../images/icons/left.svg'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div id="content">
        <div id="sidebar" className='secondairy'>
            <div id="logo-container">
              <img id="logo" src="https://placeholderlogo.com/img/placeholder-logo-1.png" alt="" />
            </div>
            <hr id="seperator" className='rounded'/>
            <div id="currentgame-container">
              <div id="currentgame-back-container">
                <Link to="/games">
                  <img id="currentgame-back" src={LeftArrow} alt="" />
                </Link>
              </div>
              <img id="currentgame-icon" src="https://t0.rbxcdn.com/4fbc753eb0a18570a6cd9c07269c87ae" alt="" />
              <div id="currentgame-info-container">
                <p id="currentgame-info-title" className='bold'>RGM</p>
                <p id="currentgame-info-description" className='muted'>LuukOriginal</p>
              </div>
            </div>
            <hr id="seperator" className='rounded'/>
            <div id="nav-btn" className='btn primary'>
              <img id="btn-icon" src={Cog} alt="" />
              General
            </div>
            <div id="nav-btn" className='btn primary'>
              <img id="btn-icon" src={Database} alt="" />
              Datastores
            </div>
        </div>
      </div>
    )
  }
}
