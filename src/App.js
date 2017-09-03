import React, { Component } from 'react';
class Welcome extends React.Component {
  render() {
    return (
      <div>
      <input value={this.props.name} onChange={this.handleChange} type="text"/>
        <button type="submit" value="Submit">Go!</button>
      </div>
    )
  }
}
class Render extends React.Component {
  render() {
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
    this.state = {name: localStorage.getItem('name')};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	componentDidUpdate() {
    localStorage.setItem('name', this.state.name);
  }

  handleChange(event) {
    this.setState({name: event.target.name});
  }
  handleSubmit(event) {
    this.setState({name: event.target.name});
  }


  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
          <p>przywitaj się <Welcome /></p>
          <Render name={this.props.name} />
          </form>
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
