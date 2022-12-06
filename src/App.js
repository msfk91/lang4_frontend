import logo from './logo.svg';
import './App.css';
import {NounCategory} from "./Components/NounCategory.js"
import {ACompleteProvider} from "./Context/ACompleteProvider.js"
function App() {
  return (
    <ACompleteProvider>
      <NounCategory/>
    </ACompleteProvider>
  );
}

export default App;
