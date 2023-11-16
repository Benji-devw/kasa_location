// import './styles/App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import NotFound from './pages/404';

//FIXME: Add redirect 404 si dans url /sqddqjsdlk
// fixe route /article/slug
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
