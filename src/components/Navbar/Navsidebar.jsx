import React from 'react'
import "./Navbar.css";

function Navsidebar() {
  return (
    <div className="w3-sidebar w3-bar-block">
        <p className='highscore'>Highscore: 5600</p>
        <p className='leaderboard'>Leaderboard</p>
        <p className='scores'>user 1: 19000</p>
        <p className='scores'>user 2: 16600</p>
        {/* <h1 className='quizzname'>Flag finals</h1> */}

        
    </div>
  )
}

export default Navsidebar