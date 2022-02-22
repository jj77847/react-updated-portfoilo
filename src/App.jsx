import Topbar from "./src/components/topbar/Topbar";
import Intro from "./src/components/intro/Intro";
import Portfolio from "./src/components/portfolio/Portfolio";
import Works from "./src/components/works/Works";
import Testimonials from "./src/components/testimonials/Testimonials";
import Contact from "./src/components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
