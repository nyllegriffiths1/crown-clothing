import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import SignIn from './routes/signin/sign-in.component';



function App() {
  return (
    <Routes>
      <Route to='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>      
    </Routes>
  );
};

export default App;
