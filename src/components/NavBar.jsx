import React from "react";

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
        🎮Gold-Games
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                👾 Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                📰 Novedades
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                🕹️ Juegos 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                🛒 Carrito
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      
    </>
  );
}
