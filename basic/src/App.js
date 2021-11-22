import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { DashboadComponent } from "./components/dashboard/dashboard";
import { HeaderComponent } from "./components/header/header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { BlogsComponent } from "./components/blogs/blogs";

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Switch>
        <Route exact path="/" component={DashboadComponent}></Route>
        <Route path="/events" component={BlogsComponent}></Route>
        <Route path="/blogs" component={BlogsComponent}></Route>
      </Switch>
    </div>
  );
}
export default App;
