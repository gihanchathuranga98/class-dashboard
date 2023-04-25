import './App.css';
import Dashboard from './Owner/Dashboard/Dashboard';
import Sidebar from './common/Elements/SIdebar/ResponsiveDrawer'
import Login from './common/Pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Sidebar>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/ownerdashboard' exact element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </Sidebar>
  );
}

export default App;
