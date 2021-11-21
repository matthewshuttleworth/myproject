import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Testimonials/>
        <Contact/>
        <Portfolio/>
        <Works/>

      </div>
    </div>
  );
}

export default App;
