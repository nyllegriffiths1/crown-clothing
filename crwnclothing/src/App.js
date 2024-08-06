import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/signin/authentication.component';



function App() {
  return (
    <Routes>
      <Route to='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/authentication' element={<Authentication />} />
      </Route>      
    </Routes>
  );
};

export default App;
