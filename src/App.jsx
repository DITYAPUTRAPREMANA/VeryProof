import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Components/Register/register';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" replace />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
}

export default App;