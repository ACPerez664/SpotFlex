import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestForm from "./components/RequestForm";
import ThankYou from "./components/ThankYou";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequestForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}
export default App;
