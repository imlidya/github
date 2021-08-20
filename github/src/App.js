import './App.css';
import UserPage from './containers/UserPage'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:username" component ={UserPage}></Route>
        <Redirect to={'/imlidya'}></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
