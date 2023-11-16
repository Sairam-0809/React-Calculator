
import { createContext } from 'react';
import ParentComponent from './Components/ParentComponent';

function App(){
const context=createContext();
  return (

    <ParentComponent />
  )
}

export default App;