/*
* File: app.js
* Author: Zsiga Gergely
* Copyright: 2023, Zsiga Gergely
* Group: Szoft 1/2/E
* Date: 2023-05-10
* Github: https://github.com/zsi-ga/ships.git
* Licenc: GNU GPL
*/



const doc = {
    tbody: document.querySelector('#tbody')
};

const state = {
    host: 'http://localhost:8000/',
    ships: []
};

getDatabase();


function getDatabase() {
    let url = state.host + 'ships';

    fetch(url)
    .then(response => response.json())
    .then(result => {

        state.ships = result;
        render();
    });



}

function render() {
    let rows = '';
    state.ships.forEach( (ships) => {
        rows += `

        <tr>
            <td>${ships.name}</td>
            <td>${ships.length}</td>
            <td>${ships.price}</td>
            <td>${ships.person}</td>
            <td>${ships.trailer}</td>
        </tr>
      `;  
            
    });
    doc.tbody.innerHTML = rows;




    
}
