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
import AllClasses from './SuperAdmin/AllClasses/AllClasses';
import DetailsOfaClass from './common/Pages/DetailsOfaClass/DetailsOfaClass';
import AddNewTeacher from './common/Pages/AddNewTeacher/AddNewTeacher';
import AddNewClass from './common/Pages/AddNewClass/AddNewClass';
import AddNewStudent from './common/Pages/AddNewStudent/AddNewStudent';
import AddStudentToClass from './common/Pages/AddStudentToClass/AddStudentToClass';
import MarkAttendanceBarcode from './common/Pages/MarkAttendanceBarcode/MarkAttendanceBarcode';
import MarkPaymentsBarcode from './common/Pages/MarkPaymentsBarcode/MarkPaymentsBarcode';
import AddNewAdmin from './SuperAdmin/AddNewAdmin/AddNewAdmin';
import JustAddNewStudent from './common/Pages/JustAddNewStudent/JustAddNewStudent';
import NewTable from './common/Pages/NewTable/NewTable';
import AddStudentToClassManual from './common/Pages/AddStudentToClassManual/AddStudentToClassManual';

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
          <Route path='/superadmin/allclasses' exact element={<AllClasses/>}/>
          <Route path='/superadmin/class/:id' exact element={<DetailsOfaClass/>}/>
          <Route path='/superadmin/addnewteacher' exact element={<AddNewTeacher/>}/>
          <Route path='/superadmin/addnewclass' exact element={<AddNewClass/>}/>
          <Route path='/superadmin/addnewstudent' exact element={<AddNewStudent/>}/>
          <Route path='/superadmin/addstudenttoclass' exact element={<AddStudentToClass/>}/>
          <Route path='/superadmin/markattendancebarcode' exact element={<MarkAttendanceBarcode/>}/>
          <Route path='/superadmin/markpaymentbarcode' exact element={<MarkPaymentsBarcode/>}/>
          <Route path='/superadmin/addnewadmin' exact element={<AddNewAdmin/>}/>
          <Route path='/superadmin/addstudenttoclassesmanual' exact element={<AddStudentToClassManual/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
