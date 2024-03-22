import "./App.css";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { gapi } from "gapi-script";
import { useEffect } from "react";
const CLIENT_ID = "869508749472-fr6qc1lmht8fpic7bh3cophoe3h83hj0.apps.googleusercontent.com";
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", start);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
