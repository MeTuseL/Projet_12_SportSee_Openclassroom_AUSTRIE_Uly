import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import NavigationBar from './components/NavigationBar'
import { Link } from 'react-router-dom'
import styles from './styles/body/body.module.scss'
import './styles/global/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <NavigationBar />
      <div className={styles.container}>
        <main>
          <Routes>
            {/* redirect to /tableau-bord/:idUser when user goes to / */}
            <Route
              path="/"
              element={
                <Navigate
                  to={'/tableau-bord/' + process.env.REACT_APP_IDUSER}
                />
              }
            />
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
