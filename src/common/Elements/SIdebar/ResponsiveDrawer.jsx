import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth-Context';
import { checkToken } from '../../Functions/checkUserValidity';

const drawerWidth = 260;

function ResponsiveDrawer({window, children, title}) {

  const auth = React.useContext(AuthContext);
  // continue from here...
  const nav = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [role, setRole] = React.useState(200);

  const web_title = title || "Revotech Solutions";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //#checking token validation
  // React.useEffect(() => {
  //   try {
  //     console.log('came to responsive drawer');
  //       const userData = localStorage.getItem('userData');
  //       if(userData) { 
  //           const token = JSON.parse(userData).token;
  //           checkToken(token)
  //           .then((data) => {
  //               console.log('data has came', data);
  //               if(!data){
  //                   localStorage.removeItem('userData');
  //                   // nav('/');
  //               }
  //           })
  //           .catch((error) => {
  //               localStorage.removeItem('userData');
  //           })
  //       }else{
  //         nav('/');
  //       }
  //   } catch (error) {
  //       console.error('error in useEffect | AddNewInstitute', error);
  //       localStorage.removeItem('userData');
  //       // nav('/');
  //   }

  //   }, []);

  React.useEffect(() => {
    try {
      let userData = localStorage.getItem('userData');
      if(userData) {
        userData = JSON.parse(userData);
        setRole(userData.user.role);
        console.log('Role in drawer --------', role );
      }
    } catch (error) {
      console.log('error in drawer', error);
    }
  }, [])

  const icon = {
    inbox: <InboxIcon />
  }

  // const navs = auth.isLoggedIn && auth.role == 201 ? [
    
  //   {
  //     text: 'Owner Dashboard',
  //     nav: '/ownerdashboard'
  //   },
  //   {
  //     text: 'Add New Institute',
  //     nav: '/owneraddnewinst'
  //   },
  //   {
  //     text: 'List of Super Admins',
  //     nav: '/ownerlistofsuperadmins'
  //   },
  //   {
  //     text: 'Create Super Admins',
  //     nav: '/ownercreatesuperadmin'
  //   },
  //   {
  //     text: 'Change Password',
  //     nav: '/changepassword'
  //   },
  //   {
  //     text: 'S. A. Dashboard',
  //     nav: '/superadmin/dashboard'
  //   },
  //   {
  //     text: 'S. A. All Classes',
  //     nav: '/superadmin/allclasses'
  //   },
  //   {
  //     text: 'Chem Class',
  //     nav: 'superadmin/class/10'
  //   },
  //   {
  //     text: 'Add New Teacher',
  //     nav: '/superadmin/addnewteacher'
  //   },
  //   {
  //     text: 'Add New Student',
  //     nav: '/superadmin/addnewstudent'
  //   },
  //   {
  //     text: 'Add New Student B.',
  //     nav: '/superadmin/addstudenttoclass'
  //   },
  //   {
  //     text: 'Attendace Barcode',
  //     nav: '/superadmin/markattendancebarcode'
  //   },
  //   {
  //     text: 'Payment Barcode',
  //     nav: '/superadmin/markpaymentbarcode'
  //   },
  //   {
  //     text: 'Add New Class',
  //     nav: '/superadmin/addnewclass'
  //   },
  //   {
  //     text: 'New MUI Table',
  //     nav: '/newtable'
  //   }
  // ] : [
  //   {
  //     text: 'Login',
  //     nav: '/'
  //   }
  // ];

  const getNavs = () => {
    switch(role){
      case 201:
        return [
          {
            text: 'Owner Dashboard',
            nav: '/ownerdashboard'
          },
          {
            text: 'Add New Institute',
            nav: '/owneraddnewinst'
          },
          {
            text: 'List of Super Admins',
            nav: '/ownerlistofsuperadmins'
          },
          {
            text: 'Create Super Admins',
            nav: '/ownercreatesuperadmin'
          },
          {
            text: 'Change Password',
            nav: '/changepassword'
          }
        ]

      default:
        return [
          {
            text: 'Login',
            nav: '/'
          }
        ]
    }
  }


  var navs = getNavs(role);


  const handleClick = (index) => {
    nav(index)
  }

  const drawer = (
    <div>
      <Toolbar />
      {/* <Divider /> */}
      <List>
        {navs.map((nav, index) => (
          <ListItem key={nav.text} disablePadding>
            <ListItemButton onClick={()=> handleClick(nav.nav)} id={index} key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? icon.inbox : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={nav.text} secondary={'secondary'}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` }, //changed sm -> md
          ml: { md: `${drawerWidth}px` }, //changed sm -> md
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }} //changed sm -> md
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {web_title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} //changed sm -> md
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' }, //changed sm -> md
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' }, //changed sm -> md
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }} //changed sm -> md
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;