
import './App.css';

import ShowList from './components/ShowList';
import InputContainer from './container/InputContainer';

function App() {
  return (
    <div className="App">
     <h1> Todo list</h1>
 <InputContainer/>
<ShowList/>
    </div>
  );
}

export default App;
