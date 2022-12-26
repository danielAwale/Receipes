import { BrowserRouter, Switch, Route } from 'react-router-dom';

// page componenets
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Receipe from './pages/receipe/Receipe';

//styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/create" >
            <Create />
          </Route>
          <Route path="/search" >
            <Search />
          </Route>
          <Route path="/receipe/:id" >
            <Receipe />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
