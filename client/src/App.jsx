import {Route,Routes} from "react-router-dom"
import './App.css'
import Index from './Index';
import Login from './Login';
import Register from "./Register";
import axios from 'axios';
axios.defaults.baseURL="http://localhost:4000";

function App() {
return (
<Routes>
  <Route index element={<Index />} />
   <Route path="/login" element ={<Login />} />
<Route path="/register" element ={<Register />} />
</Routes>
  )
}

export default App
