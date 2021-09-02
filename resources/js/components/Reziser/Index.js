import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import DodajRezisera from './DodajRezisera';
import SviReziseri from './SviReziseri';

function Index() {
    return (
        <div>
            <div className="row mt-5">

            </div>
            <Router>
                <div className="mt-5 mb-5">
                    <Link to="/rezisers" className="btn mr-5">Svi reziseri</Link>
                    <Link to="/rezisers/dodaj" className="btn ">Unesi novog rezisera</Link>

                    <Route exact path="/rezisers" component={SviReziseri}></Route>
                    <Route exact path="/rezisers/dodaj" component={DodajRezisera}></Route>
                     
                </div>
            </Router> 
        </div>

    );
}

export default Index;