import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/EventDetails'
import PageNotFound from './pages/PageNotFound'
import './App.css'

const App = () => {

  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: 'location/:location',
      element: <LocationEvents />
    },
    {
      path: '/event/:id',
      element: <EventDetails />
    },
    {
      path: '/*',
      element: < PageNotFound />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>Running for the RGV</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App