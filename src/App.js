import './App.css';
import AddNewInstitute from './Owner/AddNewInstitute/AddNewInstitute';
import AddNewSuperadmin from './Owner/AddNewSuperadmin/AddNewSuperadmin';
import Dashboard from './Owner/Dashboard/Dashboard';
import ListOfSuperAdmins from './Owner/ListOfSuperAdmins/ListOfSuperAdmins';
import Sidebar from './common/Elements/SIdebar/ResponsiveDrawer'
import ChangePassword from './common/Pages/ChangePassword/ChangePassword';
import Login from './common/Pages/Login/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import SuperAdminDashboard from './SuperAdmin/SuperAdminDashboard/SuperAdminDashboard'
// import AllClasses from './SuperAdmin/AllClasses/AllClasses';
// import DetailsOfaClass from './common/Pages/DetailsOfaClass/DetailsOfaClass';
// import AddNewTeacher from './common/Pages/AddNewTeacher/AddNewTeacher';
// import AddNewClass from './common/Pages/AddNewClass/AddNewClass';
// import AddNewStudent from './common/Pages/AddNewStudent/AddNewStudent';
// import AddStudentToClass from './common/Pages/AddStudentToClass/AddStudentToClass';
// import MarkAttendanceBarcode from './common/Pages/MarkAttendanceBarcode/MarkAttendanceBarcode';
// import MarkPaymentsBarcode from './common/Pages/MarkPaymentsBarcode/MarkPaymentsBarcode';
// import AddNewAdmin from './SuperAdmin/AddNewAdmin/AddNewAdmin';
// import AddStudentToClassManual from './common/Pages/AddStudentToClassManual/AddStudentToClassManual';
// import DetailsOfAdmins from './SuperAdmin/DetailsOfAdmins/DetailsOfAdmins';
// import DetailsOfTeachers from './common/Pages/DetailsOfTeachers/DetailsOfTeachers';
// import MarkAttendanceManual from './common/Pages/MarkAttendanceManual/MarkAttendanceManual';
// import MarkPaymentManual from './common/Pages/MarkPaymentManual/MarkPaymentManual';
// import MarkFreeCardStudents from './common/Pages/MarkFreeCardStudents/MarkFreeCardStudents';
import { AuthContext } from './common/Contexts/Auth-Context';
import { useCallback, useEffect, useState } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(0);
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);


  const login = useCallback((data)=>{
    try {
      console.log(data);
      setIsLoggedIn(true);
      setToken(data.token);
      setRole(data.user.role);
      setId(data.user._id);
      setName(data.user.name);
      localStorage.setItem('userData', JSON.stringify({token: data.token, user: {_id: data.user._id, role: data.user.role, name: data.user.name}}));
    } catch (error) {
      console.error(error);
    }
  }, []);


  const logout = useCallback(()=>{
    console.log('running logout');
    setIsLoggedIn(false);
  }, []);

  const getRoutes = (role) => {
    try {
      console.log('getRoutes() - ' + role);
      switch(role){
        case 201:
          return (
            <>
              <Route path='/ownerdashboard' exact element={<Dashboard/>}/>
              <Route path='/owneraddnewinst' exact element={<AddNewInstitute/>}/>
              <Route path='/ownercreatesuperadmin' exact element={<AddNewSuperadmin/>}/>
              <Route path='/ownerlistofsuperadmins' exact element={<ListOfSuperAdmins/>}/>
              <Route path='/changepassword' exact element={<ChangePassword/>}/>
            </>
          );
        
        default:
          return  <Route path='/' exact element={<Login/>}/>
      }
    } catch (error) {
      console.error(error);
    }
  }


  // const routes = <>
  // <Route path='/superadmin/dashboard' exact element={<SuperAdminDashboard/>}/>
  // <Route path='/superadmin/allclasses' exact element={<AllClasses/>}/>
  // <Route path='/superadmin/class/:id' exact element={<DetailsOfaClass/>}/>
  // <Route path='/superadmin/addnewteacher' exact element={<AddNewTeacher/>}/>
  // <Route path='/superadmin/addnewclass' exact element={<AddNewClass/>}/>
  // <Route path='/superadmin/addnewstudent' exact element={<AddNewStudent/>}/>
  // <Route path='/superadmin/addstudenttoclass' exact element={<AddStudentToClass/>}/>
  // <Route path='/superadmin/markattendancebarcode' exact element={<MarkAttendanceBarcode/>}/>
  // <Route path='/superadmin/markpaymentbarcode' exact element={<MarkPaymentsBarcode/>}/>
  // <Route path='/superadmin/addnewadmin' exact element={<AddNewAdmin/>}/>
  // <Route path='/superadmin/addstudenttoclassesmanual' exact element={<AddStudentToClassManual/>}/>
  // <Route path='/superadmin/detailsofadmins' exact element={<DetailsOfAdmins/>}/>
  // <Route path='/superadmin/detailsofteachers' exact element={<DetailsOfTeachers/>}/>
  // <Route path='/superadmin/markattendancemanual' exact element={<MarkAttendanceManual/>}/>
  // <Route path='/superadmin/markpaymentmanual' exact element={<MarkPaymentManual/>}/>
  // <Route path='/superadmin/markfreecardstudents' exact element={<MarkFreeCardStudents/>}/>
  // </>


  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout, role: role, token:token, name, id}}>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            {getRoutes(role)}
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
