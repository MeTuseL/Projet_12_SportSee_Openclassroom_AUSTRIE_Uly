import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Dashboard from './pages/dashboard'
import NavigationBar from './components/navigationBar'
import { Link } from 'react-router-dom'
import styles from './css/body.module.css'
import './css/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <div className={styles.container}>
        {/*add a div for center body */}
        <NavigationBar />
        <main>
          <Routes>
            {/* redirect to /tableau-bord/:idUser when user goes to / */}
            <Route path="/" element={<Navigate to="/tableau-bord/12" />} />
            <Route path="/tableau-bord/:idUser" element={<Dashboard />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found</h2>
                  <Link to="/">Retourner au tableau de bord</Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  </React.StrictMode>,
)
