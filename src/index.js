import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Components/loader/loader'; // Assuming Loader is the correct component name

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Wait time in milliseconds
  }, []);

  return isLoading ? <Loader /> : <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
