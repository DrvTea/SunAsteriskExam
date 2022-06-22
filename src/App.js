import './App.css';
import Home from './Home';
import Create from './Create';
import { Component, React } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Home />} />
          <Route path="/article" element={<Home />} />
        </ReactRoutes>
      </BrowserRouter>
    );
  }
}
