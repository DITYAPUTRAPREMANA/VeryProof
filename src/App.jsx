import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Components/Register/register';
import Login from './Components/Login/Login';
import Landing from './Components/pages/landing_pages';
import About from './Components/pages/about';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Landing" replace />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Landing' element={<Landing/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
  )
}

export default App;