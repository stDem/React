import './App.css';
import './style/style.css';
import Counter from './components/counter';
import InputForm from './components/form';
import MessagesList from './components/list';
import ListComponent from './components/listComponent';
import ListDelete from './components/listDelete';
import Menu from './components/menu';
import ParentCount from './components/parent';
import Student from './components/propType';
import HoverRating from './components/rating';
import RefExample from './components/refExample';
import TextInput from './components/textInput';
import Timer from './components/timer';
import TodoList from './components/todoList';
import Show from './components/visible';
import Switch from '@mui/material/Switch';
import ThemeSwitcher from './components/themeSwitcher';
import TemperatureConverter from './components/temperatureConverter';
import TodoListDelete from './components/todoListDelete';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {
  return (
    <div className="App">
      <h1>Homework 3</h1>

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
      <TemperatureConverter/>
      <TodoListDelete/>


    </div>
  );
}

export default App;

// rfc
