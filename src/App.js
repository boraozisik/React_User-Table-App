import React from 'react';
import './App.css';
import { Table } from './components/Table';


function App() {
  return (
    <div className="App mt-3">
      <h1>User Table App</h1>
      <hr />
      <div className="row">

        <div className="col-md-2 mt-5">
          <form id="edit-user">
              <div className="form-group">
                <label htmlFor="edit_name">Name</label>
                <input type="text" className='form-control' id='editName'/>
              </div>
              <div className="form-group">
                <label htmlFor="edit_email">E-mail</label>
                <input type="text" className='form-control' id='editEmail'/>
              </div>
              <div className="form-group">
                <label htmlFor="edit_favorite_game">Favorite Game</label>
                <input type="text" className='form-control' id='editFavoriteGame'/>
              </div>
              <div className="form-group">
                <label htmlFor="edit_favorite_book">Favorite Book</label>
                <input type="text" className='form-control' id='editFavoriteBook'/>
              </div>
              <div className="form-group">
                <label htmlFor="edit_favorite_film">Favorite Film</label>
                <input type="text" className='form-control' id='editFavoriteFilm'/>
              </div>
              <button type='submit' className='btn btn-primary mt-2'>Save Changes</button>
          </form>
        </div>
        <div className="col-md-10">
              <Table /> 
        </div>
      </div>

     

    </div>
  );
}

export default App;
