import { Link, Outlet } from 'react-router-dom'
import tabs from '../tabs.json'
import '../App.css'

const Layout = () => {
   return (
      <div className='wrapper'>
         <header>
            <nav>
               <ul className='header-list'>
                  {tabs.map(e => (
                     <li key={e.id}>
                        <Link to={e.id}>{e.title}</Link>
                     </li>)
                  )}
               </ul>
            </nav>
         </header>
         <main>
            <Outlet />
         </main>
      </div>
   )
}

export default Layout