import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className='bg-slate-900 w-screen h-screen'>
      <h1 className='text-5xl text-white'>Redux App</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
