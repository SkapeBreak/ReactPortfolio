
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Screens/home'
import Links from './Screens/links'
import Contact from './components/contact'
import AboutMe from './components/aboutMe'


function App() {
  return (
   
    <>
      <Router >
          <Switch>
            <Route path='/' exact component={Home} /> 
            <Route path='/links' exact component={Links} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/about' exact component={AboutMe} />
            
          </Switch >
      </Router> 
    </>
   
  );
}

export default App;
