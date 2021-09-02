import React from 'react';
import axios from 'axios'
//import {Form,Select,Option} from 'react-bootstrap'




export default class DodajFilm extends React.Component {



    constructor(props) {
      
      super(props);
      this.state = {value: '',reziseri:[],reziserJedan:'',film:'',opis:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.promena1=this.promena1.bind(this);
      this.promena=this.promena.bind(this);     
      this.promena2=this.promena2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/rezisers')
      .then(response => {
          this.setState({ reziseri: response.data });
      });
    }
  
    promena1(event){
        this.setState({reziserJedan:event.target.value});
      }
    promena(event){
      this.setState({film:event.target.value});
    }

    

    promena2(event){
      this.setState({opis:event.target.value});
    }


    handleChange(event) {
      this.setState({film: event.target.value});
    }

  
    handleSubmit(event) {
      event.preventDefault();
      
      if(this.state.reziserJedan===''){
        this.state.reziserJedan=1;
      }

      if(this.state.reziserJedan==='' ||
         this.state.film=='' ||
         this.state.opis==''
      ){
        alert('Unesite sve podatke!');
        return;
      }



      const filmNovi={
          naziv:this.state.film,
          opis:this.state.opis,
          reziser_id:this.state.reziserJedan
         //tekst:this.state.film,reziser_id:this.state.reziserJedan,opis:this.state.opis
      }

      axios.post('http://127.0.0.1:8000/films/sacuvaj',filmNovi)
      .then(res=>{
        alert('Uspesno ste uneli film!');
      });

    }
  
    render() {
      return (
        <div>
          <h1 className="text-center mt-5">Unisite novi film:</h1>
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
            <div className="form-group">
              <label>Naziv filma:</label>
              <input type="text" className="form-control" value={this.state.film} onChange={this.promena}>
              </input>
            </div>
            <div className="form-group">
              <label>Opis:</label>
              <input type="text" className="form-control" value={this.state.opis} onChange={this.promena2}>
              </input>
            </div>
            <div className="form-group text-center">
              <button className="btn" type="submit">Sacuvaj film</button>
            </div>
          </div>
        </div>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        </div>
      );
    }
  }