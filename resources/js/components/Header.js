import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Glavna from './Glavna';
import './css/Header.css'
import Reziser from './Reziser/Index'
import Film from './Film/Index';
//import Selekcija from './Selekcija';


function Header() {
   
    return (
        <Router>
             <div >
                <nav className="navbar navbar-expand-lg fixed-top" id="navi">
                <a className="navbar-brand" href="#">FILMOVI</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Pocetna <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/rezisers">Reziseri</Link>
                            <Link className="nav-item nav-link" to="/films">Fimovi</Link>
                            
                        </div>
                    </div>
                </nav>
            <Route exact path='/' component={Glavna}></Route>
            <Route exact path='/rezisers' component={Reziser}></Route>
            <Route exact path='/films' component={Film}></Route>
            
           </div> 
        </Router>

        


    );
}



export default Header;