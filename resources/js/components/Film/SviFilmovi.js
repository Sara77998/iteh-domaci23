import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import axios from 'axios'
import {Modal,Button,CardColumns,Card} from 'react-bootstrap'
import './tabela.css'
import { TrashFill } from 'react-bootstrap-icons';


export default class SviFilmovi extends Component{
    constructor() {
        super();
            this.state = {
                filmovi: []
            }
        
    }

    componentDidMount(){
            axios.get('http://127.0.0.1:8000/films')
            .then(response => {
                this.setState({ filmovi: response.data });
            });
    }

    onDelete(film_id){
        console.log(film_id);
        axios.delete('http://127.0.0.1:8000/films/izbrisi/'+film_id)
        .then(response=>{
            var filmovi1=this.state.filmovi;

            for(var i=0;i<=filmovi1.length;i++){
                if(filmovi1[i].id==film_id){
                    filmovi1.splice(i,1);
                    this.setState({filmovi:filmovi1});
                }
            }
        })
    }

    render(){
        return (
            <div className="mt-5">
                <CardColumns >
                    {
                        this.state.filmovi.map(film=>{
                            return(
                                <Card key={film.id} className = "text-right" >
                                    <blockquote className="blockquote mb-0 card-body">
                                        <p>
                                            <strong>"</strong>{film.naziv}<strong>"</strong>
                                        </p>
                                        <footer className="blockquote-footer">
                                            <small className="text-muted">
                                                {film.ime} {film.prezime}
                                            </small>
                                        </footer>
                                        <div className="text-center">
                                            <button className="btn btn-danger" onClick={this.onDelete.bind(this,film.id)}><TrashFill/>Obrisi film</button>

                                        </div>
                                    </blockquote>
                                </Card>
                            )
                        })
                    }
                </CardColumns>



                
            </div>
    
        );
    }



  
}