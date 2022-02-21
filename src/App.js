import React from "react";
import logo from "./logo.svg";
import "./src/assets/css/App.css";
import Header from "./src/components/Header";
import HomeTabs from ".src/components/HomeTabs";
import Footer from "./src/components/Footer";
function App() {
  return (
    <div>
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          //placing the header component
          <Header />
        </header>
        //placing the tabs component
        <HomeTabs />
      </div>
      <div className="icons-List">
        //placing the footer component
        <Footer />
      </div>
    </div>
  );
}
export default App;
