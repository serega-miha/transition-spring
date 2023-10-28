
import './App.css';
import { Routes,Route, useLocation} from 'react-router-dom';
import Header from './components/Header';
import SpringBody from './components/SpringBody';


import MenuFirst from './components/pages/menuFirst/MenuFirst';
import MenuSecond from './components/pages/menuSecond/menuSecond';
import MenuThird from './components/pages/menuThird/MenuThird';
import { useTransition, animated } from 'react-spring'



function App() {
  const location = useLocation();

  


  const transition = useTransition(
    location,
    location => location.pathname,
    {
    from: { opacity: 0, transform: 'translateX(100%)'},
    enter: {opacity: 1, transform: 'translateX(0%)'},
    leave: {opacity: 0, transform: 'translateX(-100%)'}
  });

  return (
 <>
     <div className="App">
      <div className="app-header">
        <Header/>
       
      </div>
      <SpringBody/>
    </div>
 
 </>
  );
}

export default App;
