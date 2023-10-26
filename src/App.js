import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import tabs from './tabs.json'

function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      navigate(`/${tabs[0].id}`)
    }
  }, [pathname, navigate])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {tabs.map(e => {
          const TabComponent = lazy(() => import(`./${e.path}`))

          return (
            <Route key={e.id} path={`/${e.id}`} element={
              <Suspense fallback={<div>Loading...</div>}>
                <TabComponent />
              </Suspense>
            } />
          )
        })}
      </Route>
    </Routes>
  )
}

export default App
