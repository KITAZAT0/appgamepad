import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section id="todo">
        <h1 class="m-3">Liste de tâches</h1>
        <ul class="list-group m-3">
            <li class="list-group-item d-flex align-tiems-center">
                Ranger la vaisselle
                <button class="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li class="list-group-item d-flex align-tiems-center">
                Répondre appel d'offres
                <button class="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li class="list-group-item d-flex align-tiems-center">
                Signer contrat
                <button class="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li class="list-group-item d-flex align-tiems-center">
                Ranger le salon
                <button class="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
        </ul>
        <footer class="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div class="btn-group">
                <a href="#" class="btn btn-outline-dark bg-light">List</a>
                <a href="#" class="btn btn-outline-dark bg-light">Completed</a>
                <a href="#" class="btn btn-outline-dark bg-light">Add</a>
            </div>
        </footer>
    </section>
  );
}

export default App;
