

import './App.css';

import  Navbar from './components/Navbar';

import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Cart from './components/Cart'
import { TemplateProvider } from './template/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/DetailView';
import { Box } from '@material-ui/core';




function App() {
 
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
         <Navbar />
            <Box style={{marginTop: "65px", background:'#000'}}>
             <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path= '/product/:id' component={DetailView} />
             </Switch>
             </Box>

         </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
   
  

      );
}

export default App;
