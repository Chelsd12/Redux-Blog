import React from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import './App.css';

const App = () => (
  <div className="App">
    <BlogForm />
    <BlogList />
  </div>
);//end of const App

export default App;
