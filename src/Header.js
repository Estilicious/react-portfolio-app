import React from "react";

export default function Header(){
    return(
        <header className="Header-intro">
        
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="esylogo1.png" className="App-logo" alt="logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="App.js">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About.js">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Project.js">Projects</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
</header>
    )
}