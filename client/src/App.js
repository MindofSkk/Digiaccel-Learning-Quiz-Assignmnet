import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './components/Routes/MainRoutes';
import { Navbar } from './components/Navbar/Navbar';
import { QuizAdd } from './components/admin/QuizAdd';
import { Footer } from './components/Fotter/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <MainRoutes/>
<Footer/>
     {/* <QuizAdd/> */}
    </div>
  );
}

export default App;
