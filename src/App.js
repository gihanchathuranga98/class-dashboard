import './App.css';
import AddNewInstitute from './Owner/AddNewInstitute/AddNewInstitute';
import AddNewSuperadmin from './Owner/AddNewSuperadmin/AddNewSuperadmin';
import Dashboard from './Owner/Dashboard/Dashboard';
import ListOfSuperAdmins from './Owner/ListOfSuperAdmins/ListOfSuperAdmins';
import Sidebar from './common/Elements/SIdebar/ResponsiveDrawer'
import ChangePassword from './common/Pages/ChangePassword/ChangePassword';
import Login from './common/Pages/Login/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SuperAdminDashboard from './SuperAdmin/SuperAdminDashboard/SuperAdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/ownerdashboard' exact element={<Dashboard/>}/>
          <Route path='/owneraddnewinst' exact element={<AddNewInstitute/>}/>
          <Route path='/ownercreatesuperadmin' exact element={<AddNewSuperadmin/>}/>
          <Route path='/ownerlistofsuperadmins' exact element={<ListOfSuperAdmins/>}/>
          <Route path='/changepassword' exact element={<ChangePassword/>}/>
          <Route path='/superadmin/dashboard' exact element={<SuperAdminDashboard/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
