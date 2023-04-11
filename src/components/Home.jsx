import React from 'react';
import { useState, useEffect } from 'react'
import Lol from '../assets/Lol.png'

const Home = (props) => {

    

    return(
        <div className="home-wrapper">
            <h1>Welcome to the Champions Creator!</h1>
            <p>Here is where you can create your own set of champions before sending them off to the summoner's rift.</p>
            <img src={Lol}/>
        </div>
    )
}

export default Home