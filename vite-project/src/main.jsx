import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Final from './2.component/project/final.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <h1>hello</h1>
    <h1>hello</h1> */}

    {/* <FunCom/> */}
    <Final/>

  </React.StrictMode>,
)
