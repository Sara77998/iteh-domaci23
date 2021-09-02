import React from 'react';
import axios from 'axios'


export default class DodajRezisera extends React.Component {

  constructor(props) {
      
    super(props);
    this.state = {value: '',ime:'',prezime:'',godina_rodjenja:'',zemlja_porekla:''};

    this.handleChange = this.handleChange.bind(this);
    this.promena=this.promena.bind(this);
    this.promena1=this.promena1.bind(this);
    this.promena2=this.promena2.bind(this);
    this.promena3=this.promena3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  promena(event){
    this.setState({ime:event.target.value});
  }

  promena1(event){
    this.setState({prezime:event.target.value});
  }

  promena2(event){
    this.setState({godina_rodjenja:event.target.value});
  }

  promena3(event){
    this.setState({zemlja_porekla:event.target.value});
  }

  handleChange(event) {
    this.setState({film: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();

    if(this.state.ime==='' || 
       this.state.prezime==='' ||
       this.state.godina_rodjenja==='' ||
       this.state.zemlja_porekla==''
    ){
      alert('Unesite sve podatke!');
      return;
    }    

    const noviReziser={
        ime:this.state.ime,
        prezime:this.state.prezime,
        godina_rodjenja:this.state.godina_rodjenja,
        zemlja_porekla:this.state.zemlja_porekla
    } 

    axios.post('http://127.0.0.1:8000/rezisers/sacuvaj',noviReziser)
    .then(res=>{
      alert('Uspesno unesen reziser!')
    });

  }

  render() {
    return (
      <div>
        <h1 className="text-center mt-5">Unisite novog rezisera:</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="row justify-content-center mt-4">
        <div className="col-4">
          <div className="form-group">
            <label>Ime autora:</label>
            <input type="text" className="form-control" value={this.state.ime} onChange={this.promena}>
            </input>
          </div>
          <div className="form-group">
            <label>Prezime autora:</label>
            <input type="text" className="form-control" value={this.state.prezime} onChange={this.promena1}>
            </input>
          </div>
          <div className="form-group">
            <label>Godina rodjenja:</label>
            <input type="number"  className="form-control" value={this.state.godina_rodjenja} onChange={this.promena2}>
            </input>
          </div>
          <div className="form-group">
            <label>Istorijsko razdoblje:</label>
            <input type="text" className="form-control" value={this.state.zemlja_porekla} onChange={this.promena3}>
            </input>
          </div>


          <div className="form-group text-center">
            <button className="btn" type="submit">Sacuvaj </button>
          </div>
        </div>
      </div>
      </form>
      </div>
    );
  }
  }