import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//export browser router
import {BrowserRouter as Router} from 'react-router-dom'

//import course context provider
import CourseContextProvider from './Components/CourseContext/CourseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CourseContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Router>
  </CourseContextProvider>
)
