import './App.css';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';
import UseCallback from './hooks/UseCallback';
import UseContext from './hooks/UseContext';


function App() {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <UseContext />
    </div>
  );
}

export default App;
