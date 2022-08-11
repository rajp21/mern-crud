import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './pages/Home'; 
import { Adduser } from './pages/Adduser';
import {Toaster} from 'react-hot-toast'; 
import { EditUser } from './pages/EditUser';


function App() {
  return (
    <div className="App">
      <Toaster position='top-right'
              toastOptions={{
                success: {
                  theme: {
                    primary: '#4aeb88'
                  }
                }
              }}
              ></Toaster>
      <Router>
        <Routes>
          <Route path ="/"  element={<Home />}></Route>
          <Route path ="/add-user"  element={<Adduser />}></Route>
          <Route path ="/edit-user/:id"  element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
