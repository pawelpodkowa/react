import React, { Component } from 'react';
class Welcome extends React.Component {


   handleChange(event) {
     this.setState({name: event.target.name});
   }

   handleSubmit(event) {

     alert('A name was submitted: ' + this.state.name);
     event.preventDefault();
   }
  componentDidUpdate() {
    localStorage.setItem('name', this.state.name);
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} >
      <input onChange={this.handleChange} value={this.props.name} type="text"/>
        <button type="submit" value="Submit">Go!</button>
      </form>
      </div>
    )
  }
}
class Render extends React.Component {
  render () {
    return (
      <div>
      <h2>Witaj! {this.props.name}</h2>
      <p> Teraz możesz dodawać swoje zadania, usówać i zmieniąć. Zadania zostaną zapisane automatycznie do localStorage. </p>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {name: localStorage.getItem('value')};

   }

  render() {


    return (
      <div className="row">
        <div className="container">
          <div className="col-md-12">
          <p>przywitaj się <Welcome /></p>
          <Render name={this.props.name} />
          </div>
                <div className="col-md-6">

                </div>
                <div className="col-md-6">

                </div>
          </div>
      </div>
    )
  }
}


export default App;
