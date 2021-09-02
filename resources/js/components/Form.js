import React from 'react';
import axios from 'axios'
//import {Form,Select,Option} from 'react-bootstrap'




export default class NameForm extends React.Component {



    constructor(props) {
      
      super(props);
      this.state = {value: '',filmovi:[],reziserJedan:'',film:'',opis:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.promena=this.promena.bind(this);
      this.promena1=this.promena1.bind(this);
      this.promena2=this.promena2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/rezisers')
      .then(response => {
          this.setState({ reziseri: response.data });
      });
    }
  
    promena(event){
      this.setState({film:event.target.value});
    }

    promena1(event){
      this.setState({reziserJedan:event.target.value});
    }

    promena2(event){
      this.setState({opis:event.target.value});
    }


    handleChange(event) {
      this.setState({film: event.target.value});
    }

  
    handleSubmit(event) {

      if(this.state.reziserJedan===''){
        this.state.reziserJedan=1;
      }

      alert(this.state.film+' '+this.state.reziserJedan+' '+this.state.opis);
      event.preventDefault();
      const filmNovi={
         tekst:this.state.film,reziser_id:this.state.reziserJedan,opis:this.state.opis
      }

      axios.post('http://127.0.0.1:8000/films/sacuvaj',filmNovi)
      .then(res=>console.log(res.data));

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
                this.state.pisci.map((reziser)=>
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
              <input type="text" className="form-control" value={this.state.citat} onChange={this.promena}>
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