import React    from "react";
import axios from "axios";
import {  Accordion, Card, Button,  } from 'react-bootstrap';

// import template from "./Issues.jsx";
const URL = "https://api.github.com/repos/walmartlabs/thorax/issues"
// const I = {
//   id, 
//   title, 
//   state, 
//   number, 
//   url,
//   repository_url,
//   labels_url,
//   comments_url,
//   events_url,
//   html_url,
//   node_id,
//   user,
//   labels, //array
//   locked,
//   assignee,
//   assignees, // array
//   milestone,
//   comments,
//   created_at,
//   updated_at,
//   closed_at,
//   author_association,
//   active_lock_reason,
//   pull_request,
//   body,
//   performed_via_github_app
// }
class Issues extends React.Component 
{
  state = {data:[]}
  componentDidMount()
  {
    axios.get(URL)
    .then(res =>
    {
      // console.log(res.data)
      this.setState({data : Object.values(res.data)})
    }).catch(err => console.log(err))
  }
  render() 
  {
    return (
      <div>
        <Accordion>
        {
          this.state.data.map(issue => 
          {
            return (
            <Card align="left">
              <Card.Header key={issue.id}>
                <Accordion.Toggle as={Button} variant="link" eventKey={issue.id} >
                  <h3>{issue.number} - {issue.title} :: {issue.state}</h3>
                </Accordion.Toggle>
              </Card.Header>
              
              <Accordion.Collapse eventKey={issue.id}>
                <Card.Body>
                  {
                    Object.entries(issue).map(([key, value]) =>
                    {
                      // console.log(`${key} :: ${value}`)
                      return( 
                        <div key={key}>
                        <h6 >{(`${key}`)} </h6>
                        <p > {(`${value}`)} </p>
                        </div>
                      )   
                    })
                  }

                </Card.Body>
              </Accordion.Collapse>
            
            </Card>
            )})
          }
        </Accordion>
      </div>
    );
     
  }
}

export default Issues;
