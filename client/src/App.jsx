import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents.jsx'
import EventDetails from './pages/EventDetails.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import './App.css'

const App = () => {

  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/locations/:location',
      element: <LocationEvents />
    },
    {
      path: '/event/:id',
      element: <EventDetails />
    },
    {
      path: '/*',
      element: <PageNotFound />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>Running for the RGV</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App