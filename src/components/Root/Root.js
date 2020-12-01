import React    from "react";
import template from "./Root.jsx";

class Root extends React.Component 
{
  render() 
  {
    return template.call(this);
  }
}

export default Root;
