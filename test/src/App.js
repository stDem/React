// rfc
// ffc
// nfn
import "./App.css";
import "./style/style.css";
import Counter from "./components/counter";
import InputForm from "./components/form";
import MessagesList from "./components/list";
import ListComponent from "./components/listComponent";
import ListDelete from "./components/listDelete";
import Menu from "./components/menu";
import ParentCount from "./components/parent";
import Student from "./components/propType";
import HoverRating from "./components/rating";
import RefExample from "./components/refExample";
import TextInput from "./components/textInput";
import Timer from "./components/timer";
import TodoList from "./components/todoList";
import Show from "./components/visible";
import Switch from "@mui/material/Switch";
import ThemeSwitcher from "./components/themeSwitcher";
import TemperatureConverter from "./components/temperatureConverter";
import TodoListDelete from "./components/todoListDelete";
import Lottery from "./components/lottery";
import { useState } from "react";
import Article from "./components/router/article";
import ProductApp from "./components/pagination/ProductApp";
import TwoPages from "./components/twoPages/twoPages";

const label = { inputProps: { "aria-label": "Switch demo" } };
const articles= [
  {id: 1, title:'Article 1', content: 'Content of the article 1'},
  {id: 2, title:'Article 2', content: 'Content of the article 2'},
  {id: 3, title:'Article 3', content: 'Content of the article 3'},
];

export default function App() {
  return (
    <div className="App">
      <h1>Homework 4</h1>

      {/* <h1>Test File</h1> */}
      {/* <Timer />
      <Switch {...label} defaultChecked />
      <ListDelete/>
      <RefExample />
      <Counter />
      <Show data='text text text' />  
      <Show data='text2 text2 text2' />  
      <MessagesList />
      <TextInput/>
      <TodoList />
      <ParentCount />
      <InputForm />
      <Menu />
      <HoverRating />
      <ListComponent/>
      <Student name='Anst' age={24} isStudent={true} />
      <ThemeSwitcher /> */}
      {/* <TemperatureConverter/>
      <TodoListDelete/> */}
      {/* <Lottery/> */}
{/* ================================================================================ */}

      {/* <div id="example_children1">
        {
          console.log(
            <DivWithChild>
              <p>New text</p>
              <div>New div element</div>
            </DivWithChild>
          )
        }
      </div> */}
{/* ================================================================================ */}

      {/* <div id="example_children2">
        <h2>Children example 2</h2>
        <BorderComp>
          <p>This paragraph is INSIDE the frame</p>
          <button>Button inside the frame</button>
        </BorderComp>
        <BorderComp>
          <h3>New title</h3>
        </BorderComp>
        <p>This paragraph is OUTSIDE  the frame</p>
      </div> */}
{/* ================================================================================ */}
{/* it is easy to create custom cards with differend elements inside, such as 
    text, buttons, links, and etc. */}
      
      {/* <div id="Children_example3"> 
        <h2>Example 3 of use "props.children"</h2>
        <Card title="Card1">
          <p>There is the content of the first card</p>
          <button>Action</button>
        </Card>
        <Card title="Card2">
          <p>There is the content of the second card</p>
          <a href="#">Link</a>
        </Card>
      </div> */}

{/* ================================================================================ */}
      {/* <div id="children_example4">
        <h1>Render props example with functional components</h1>
        <MouseTracker render={({x,y}) => <MouseInfo x={x} y={y}/>}/>
      </div> */}

{/* ================================================================================ */}
{/* ROUTER */}
      {/* <Article/> */}

{/* ================================================================================ */}
{/* PAGINATION */}
      {/* <ProductApp/> */}

{/* ================================================================================ */}
      <TwoPages/>   

    </div>
    
  );
};


function DivWithChild({children}) {
  return(
    <div>
      {children}
    </div>
  );
};

const BorderComp=({children})=>{
  return(
    <div style={{border: '2px solid #000', padding: '16px'}}>
      {children}
    </div>
  );
};

const Card = ({title, children}) => { 
  return(
    <div style={{border: '2px solid #CCC', padding: '16px', marginBottom: '16px'}}>
      <h2>{title}</h2>
      {children}
    </div>
  );
 };

 ///////// Render props
 // Component for mouse cursor position detection
 const MouseTracker = ({render}) => { 
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseMove = (event) => { 
      setPosition({x: event.clientX, y: event.clientY})
     };
     return(
      <div style={{height: '300px'}} onMouseMove={handleMouseMove}>
        {/* we use passed funtion inside Render */}
        {render(position)}
      </div>
     );
  };

  // Component that use Render prop for rendering information about cursor position
  const MouseInfo = ({x,y}) => { 
    return(
      <div>
        <h2>Mouse cursor position</h2>
        <p>X: {x}, Y: {y}</p>
      </div>
    );
   };






