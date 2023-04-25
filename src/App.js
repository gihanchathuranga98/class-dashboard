import './App.css';
import Sidebar from './Elements/SIdebar/ResponsiveDrawer'
import NewSelect from './Elements/Select/NewSelect';

function App() {
  return (
    <Sidebar>
      <NewSelect label={'Testing Select'} id={'select'} none>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </NewSelect>
    </Sidebar>
  );
}

export default App;
