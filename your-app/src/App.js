// import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import TastList from './components/TastList';

function App() {
  return (
    <div className="App">
      <h1>Task Management
      </h1>
      <AddTask/>
      <TastList/>
    </div>
  );
}

export default App;
