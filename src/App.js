import { BrowserRouter ,Route,Routes} from "react-router-dom";
import MyClassCom from './Component/ClassCom'
import MyFunCom from './Component/FunCom'
import './App.css';
import Home from "./Home/Home";

function App() {
  return (
 <>

 <BrowserRouter>
 <Routes>
 <Route exact path='/' element={<Home />} />
 <Route exact path='/Function' element={<MyFunCom />} />
 <Route exact path='/class' element={<MyClassCom />} />





 </Routes>



 </BrowserRouter>


 </>
  );
}

export default App;
