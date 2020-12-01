import React    from "react";
import axios from 'axios'
import { Container } from "react-bootstrap";
// import { Container } from "react-bootstrap";
const CORS = `https://cors-anywhere.herokuapp.com/`
const URL = `${CORS}https://ramen-flask-app.herokuapp.com/add`

class Home extends React.Component 
{
  constructor() 
  {
    super();
    this.state = 
    {
      name: '',
      cartoon: ''
    };
  }

  onChange= (e) => this.setState({ [e.target.name]: e.target.value });
  
  handleSubmit = (event) => 
  {
    event.preventDefault();
    const {name, cartoon} = this.state
    axios.post(URL, {name, cartoon})
    .then(res=>
    {
      console.log(res);
      console.log(res.data);
      
    }).catch(err => console.log(err))
  }

  render() 
  {
    const {name, cartoon} = this.state
    return (
        <Container>
            <form onSubmit = {this.handleSubmit}>
              <label> Person Name:
                <input 
                type = "text" 
                name = "name" 
                value={name}
                onChange={this.onChange}/>
              </label>
              <br/>
              <label> Favorite Cartoon:
                <input 
                type = "text" 
                name = "cartoon" 
                value={cartoon}
                onChange={this.onChange}/>
              </label>
              <br/>
              <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Add</button>
            </form>
        </Container>
    );
  };
}

export default Home;
