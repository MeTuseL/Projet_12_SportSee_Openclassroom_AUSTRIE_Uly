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

/**
 * Creating a router using React Router that renders a navigation bar and my dashboard page.
 *
 * @category Router
 */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router basename="/SportSee">
      <NavigationBar />
      <div className={styles.container}>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>Choisir un utilisateur</h2>
                  <nav style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={'/tableau-bord/12'}>Utilisateur 1</Link>
                    <Link to={'/tableau-bord/' + process.env.REACT_APP_IDUSER}>
                      Utilisateur 2
                    </Link>
                  </nav>
                </div>
              }
            />
            <Route path="/tableau-bord/:idUser" element={<Dashboard />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found</h2>
                  <Link to="/">Retourner à l'accueil</Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  </React.StrictMode>,
)
