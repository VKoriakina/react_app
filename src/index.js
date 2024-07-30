import React from "react";
import ReactDOM from "react-dom/client";
import {Card} from "./components/Card";

// import "./index.css"

// JS
// const div = document.createElement('div');
// const root = document.getElementById('root');
// root.append(div);

//REACT
// const paragraph = React.createElement('p',{
//     id: 'test-P-Id',
//     children: ['I am P']
// });

// const p =<p id="test-ID"> I am P</p>

// const div = React.createElement('div', {
//     name:"main",
//     id:"test-Id",
//     className: "test-class",
//     children: p,
// });
//
// const div = (
//         <div name='main' id='test Id' className = 'test-class'>
//             {p}
//         </div>
//     )

ReactDOM.createRoot(document.getElementById('root')).render(<Card />);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);