import "./Issues.css";
import axios from "axios"
import React from "react";

const URL = "https://api.github.com/repos/walmartlabs/thorax/issues"

var state = {data:[]}

axios.get(URL).then(resp =>
{
  state.data= resp.data
  console.log(state.data)
}).catch(err => console.log(err))

console.log(state.data)
function template() 
{
  return (

    <div className="issues">
      <ul>
        {state.data.length}
      </ul>
    </div>
  );
};

export default template;
