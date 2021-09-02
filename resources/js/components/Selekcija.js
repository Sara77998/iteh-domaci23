import React from 'react';
import axios from 'axios'
import {Form,Select,Option} from 'react-bootstrap'
import {Modal,Button,CardColumns,Card} from 'react-bootstrap'



export default class Selekcija extends React.Component {
  constructor(props) {
      
    super(props);
    this.state = {value: '',reziseri:[],reziserJedan:'',film:'',opis:'',reziser_id:'1',filmovi:[]};

    this.promena1=this.promena1.bind(this);

  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/rezisers')
    .then(response => {
        this.setState({ reziseri: response.data });
    });
  }

  promena1(event){
    console.log(this.state.pisac_id);
    this.setState({reziser_id:event.target.value});

    axios.get('http://127.0.0.1:8000/rezisers/'+event.target.value)
    .then(response=>{
      console.log('Uspenso');
      this.setState({fimovi:response.data});
    })
  }


  render() {
    return (
      <div>
        <div className="row mt-5">

        </div>
        <h1 className="text-center mt-5">Izaberite rezisera:</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="row justify-content-center mt-4">
        <div className="col-4">
          <div className="form-group">
            <label>Reziser:</label>
            <select className="form-control" onChange={this.promena1}>
            {
              this.state.reziseri.map((reziser)=>
              <option 
                key={reziser.id} 
                value={reziser.id}
                
                >
                  {reziser.ime} {reziser.prezime}
                
              </option>)
            }
            </select>
          </div>
          <div className="form-group text-center">
            <button className="btn" type="submit">Izaberite rezisera</button>
          </div>
        </div>
      </div>
       
      </form>

        <CardColumns>
          {
            this.state.filmovi.map(film => {
              return (
                <Card key={film.id} className="text-right" >
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      <strong>"</strong>{film.tekst}<strong>"</strong>
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        {film.ime} {film.prezime}
                      </small>
                    </footer>
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