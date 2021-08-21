import './App.css';
import UserPage from './containers/UserPage'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

function App() {
  const username = prompt('Enter a Github Username')
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:username" component ={UserPage}></Route>
        <Redirect to={`/${username}`}></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
