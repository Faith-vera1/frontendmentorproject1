import React from 'react'
// import logobrand from './images/logo.svg'

import logo from "../Images/logo.svg"



const Navbar = () => {
  return (
    <div>
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <img src={logo} alt=''/> */}
        

  <div class="container-fluid">
    <a class="navbar-brand" href="#">Features</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Company</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Careers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>

        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <ul class="navv">
          <li>Login</li>
          <li>Register</li>
      </ul> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar