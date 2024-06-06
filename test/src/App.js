import './App.css';
// import './components/style/style.css';
import Counter from './components/counter';
import MessagesList from './components/list';
import ListDelete from './components/listDelete';
import RefExample from './components/refExample';
import TextInput from './components/textInput';
import Timer from './components/timer';
import TodoList from './components/todoList';
import Show from './components/visible';

function App() {
  return (
    <div className="App">
      {/* <h1>Test File</h1>
      <Timer /> */}
      
      <ListDelete/> {/* Homework 2 */}
      {/* <RefExample />
      <Counter />
      <Show data='text text text' />  
      <Show data='text2 text2 text2' />  
      <MessagesList />
      <TextInput/>
      <TodoList/> */}
      
    </div>
  );
}

export default App;
