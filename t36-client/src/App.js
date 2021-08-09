import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import SignupForm from "./pages/LoginForm/Form";
import NewsDetails from "./pages/NewsDetails/index";
import Layout from "./Components/Layout/index";
import Backoffice from "./pages/Backoffice/index";
import News from "./pages/News/index"
import Testimonials from "./pages/Testimonials/Testimonials";
import CreateTestimonial from "./pages/CreateTestimonial/index"
import EditTestimonial from "./pages/EditTestimonial/index"
import ActivitiesList from "./pages/ActivitiesList/index"
import ActivityForm from "./pages/ActivityForm/ActivityForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm"
import Profile from "./pages/Profile/index"
import NewsForm from "./pages/NewsForm/NewsForm";
import NewsListAdmin from "./pages/NewsListAdmin/NewsListAdmin";
import TableUsers from './Components/TableUsers/TableUsers'
import EditUserForm from "./Components/EditUserForm/EditUserForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/novedad" component={News} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/iniciar" component={SignupForm} />
            <Route exact path="/registro" component={RegisterForm}/>
            <Route exact path="/perfil/:id" component={Profile}/>
            <Route exact path="/novedad/:id" component={NewsDetails} />
            <Route exact path="/backoffice/novedad" component={NewsListAdmin} />
            <Route exact path="/backoffice/edit-novedad/:id" component={NewsForm} />
            <Route exact path="/backoffice/crear-novedad" component={NewsForm} />
            <Route exact path="/backoffice" component={Backoffice} />
            <Route path="/backoffice/testimonios" component={Testimonials} />
            <Route exact path="/backoffice/crear-testimonios" component={CreateTestimonial}/>
            <Route exact path="/backoffice/testimonios/:id" component={EditTestimonial}/>
            <Route exact path="/backoffice/actividades" component={ActivitiesList} />
            <Route exact path="/backoffice/actividades/:id" component={ActivityForm} />
            <Route exact path="/editarUsuario/:id" component={EditUserForm} />
            <Route exact path="/tablaUsuarios" component={TableUsers} />
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
