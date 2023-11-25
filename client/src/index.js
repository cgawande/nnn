import ReactDOM from "react-dom";
import axios from 'axios'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
function Index() {

  const onClick=async(name)=>{
    const res = await axios.get(
      `/hello/:${name}`,
    );
    alert(res.data.message)
  }
  return <><h1>jhjhjk</h1><p><a to="/hello">Hello</a>, world!</p>
  <button onClick={()=>onClick('csg')}>Say hello</button></>

}

ReactDOM.render(<Index />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
