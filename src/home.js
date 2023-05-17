import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <img src={'/assets/images/Screenshot_18.png'} class='imglog' alt='nothing'/>
      <h1 class='logo'>Restore ME</h1><br></br>
      <p class='logo'>Hey! I'm SAM your New Friend</p>
      <Link to="/chatapp"><h3 class="hbutton">START</h3></Link>
    </div>
  );
}

export default Home;

