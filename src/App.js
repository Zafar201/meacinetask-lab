
import './App.css';
import Sidebar from './components/Sidebar/SideBar';
// import Sidebar from './components/SideBar';
import DashBoard from './screens/DashBoard';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <Sidebar/>
      <DashBoard/>
      </div>
    </div>
  );
}

export default App;
