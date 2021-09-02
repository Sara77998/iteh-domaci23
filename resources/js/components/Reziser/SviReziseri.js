import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import axios from 'axios'
//import { render } from 'node-sass';
//import { response } from 'express';

export default class SviReziseri extends Component{
    constructor() {
        super();
            this.state = {
                reziseri: []
            }
        
    }

    componentDidMount(){
            axios.get('http://127.0.0.1:8000/rezisers')
            .then(response => {
                this.setState({ reziseri: response.data });
            });
    }

    

    render(){
        return (
            <div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ime</th>
                            <th scope="col">Prezime</th>
                            <th scope="col">Godina rodjenja</th>
                            <th scope="col">Zemlja porekla</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.reziseri.map(reziser=>{
                                return(
                                    <tr key={reziser.id}>
                                        <th scope="row">{reziser.id}</th>
                                        <td>{reziser.ime}</td>
                                        <td>{reziser.prezime}</td>
                                        <td>{reziser.godina_rodjenja}</td>
                                        <td>{reziser.zemlja_porekla}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    
        );
    }



  
}


