import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Components/Register/register';
import Login from './Components/Login/Login';
import Landing from './Components/pages/landing_pages';
import About from './Components/pages/about';
import Contact from './Components/pages/contact';
import Upload from './Components/Uploadd/Upload';
import Success from './Components/Success/Success';
import Coba from './Components/uji coba/coba';
import Submit from './Components/Submit/Submit';
import Qrcode from './Components/QRcode/qrcode';
import Homepage from './Components/Homepage/homepage';
import Downloadd from './Components/Downloadd/Download';
import FeatureCards from '../src/Components/Homepage/homepage'



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Landing" replace />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Landing' element={<Landing/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/succes' element={<Success/>}/>
      <Route path='/submit' element={<Submit/>}/>
      <Route path='/coba' element={<Coba/>}/>
      <Route path='/Qrcode' element={<Qrcode/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/download' element={<Downloadd/>}/>
    </Routes>
  )
}

export default App;