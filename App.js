import logo from './logo.svg';
import './App.css';
import InputData from './InputData';
import DetailedView from './DetailedView';
import RegisteredView from './RegisterView';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AddMarks from './AddMarks';
import DelStudent from './DelStudent';
import UpdateStuDetails from './UpdateStuDetails';
import ViewMarks from './ViewMarks';
import DelMarks from './DelMarks';
import UpdateMarks from './UpdateMarks';
function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<InputData/>}/>
      <Route path='/detailedview' element={<DetailedView/>}></Route>
    <Route path='/registereduser/:_id' element={<RegisteredView/>}/>
    <Route path='/addmarks/:_id' element={<AddMarks/>}/>
    <Route path='/delStudent/:_id' element={<DelStudent/>}/>
    <Route path='/update/:_id' element={<UpdateStuDetails/>}/>
    <Route path='/viewmarks/:_id' element={<ViewMarks/>}/>
    <Route path='/updatemarks/:_id' element={<UpdateMarks/>}/>
    <Route path='/deletemarks/:_id' element={<DelMarks/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
