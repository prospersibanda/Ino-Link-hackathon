import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MentorDashboard from './pages/MentorDashboard';
import YouthDashboard from './pages/YouthDashboard';
import ExploreResources from './pages/ExploreResources';
import ChatWindow from './pages/ChatWindow';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import JoinUsForm from './components/JoinUsForm/JoinUsForm';
import Skills from './components/skillsForm/skillsForm';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/joinus" element={<JoinUsForm />} />
          <Route path="/mentordashboad" element={<MentorDashboard />} />
          <Route path="/dashboard" element={<YouthDashboard />} />
          <Route path="/explore" element={<ExploreResources />} />
          <Route path="/chat" element={<ChatWindow />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

