

import { Routes,Route, useLocation} from 'react-router-dom';



import MenuFirst from './pages/menuFirst/MenuFirst';
import MenuSecond from './pages/menuSecond/menuSecond';
import MenuThird from './pages/menuThird/MenuThird';
import { useTransition, animated } from 'react-spring'



function SpringBody() {
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
 <div className='body-container'>
     
      <div className="body-main">
        {
          transition.map(({item, props, key}) => (
            <animated.div key={key} style={props}>
                  <div className='body-main__item' style={{positon: 'absolute', width: '100%'}}>
                  <Routes location={item}>
                      <Route path='/' element={<MenuFirst/>}/>
                      <Route path='/menu2' element={<MenuSecond/>}/>
                      <Route path='/menu3' element={<MenuThird/>}/>
                  </Routes>
                  </div>
            </animated.div>

          ))}
    
      </div>
 
 
 </div>
  );
}

export default SpringBody;
