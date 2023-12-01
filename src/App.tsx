import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Budget  from './components/Budgets';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Box } from "@chakra-ui/react";


function App() {
  return (
    <Box padding={"0.9rem"} paddingLeft={{ md: "5rem"}} className="App">
      <Routes>
          <Route path='/' element={<Budget />} />
          <Route path='/dashboard' element={<div>Home Page </div>} />
          <Route path='/chats' element={<div>Chats Page</div>} />
          <Route path='/reports' element={<div>Reports Page</div>} />
          <Route path='/profile' element={<div>Profile Page</div>} />

      </Routes>
      <SideBar />
      <NavBar />
    </Box>
  );
}

export default App;
