import './App.css';
import AddNewInstitute from './Owner/AddNewInstitute/AddNewInstitute';
import Dashboard from './Owner/Dashboard/Dashboard';
import Sidebar from './common/Elements/SIdebar/ResponsiveDrawer'
import Login from './common/Pages/Login/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/ownerdashboard' exact element={<Dashboard/>}/>
          <Route path='/owneraddnewinst' exact element={<AddNewInstitute/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
