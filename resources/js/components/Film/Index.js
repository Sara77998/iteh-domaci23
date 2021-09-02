import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import SviFilmovi from './SviFilmovi';
import DodajFilm from './DodajFilm';

function Index() {
    return (
        <div>
            <div className="row mt-5">

            </div>
            <Router>
                <div className="mt-5 mb-5">
                    <Link to="/films" className="btn mr-5">Svi filmovi</Link>
                    <Link to="/films/dodaj" className="btn ">Unesi novi film</Link>
                    <Route exact path="/films" component={SviFilmovi}></Route>
                    <Route exact path="/films/dodaj" component={DodajFilm}></Route> 
                </div>
            </Router> 
        </div>

    );
}

export default Index;