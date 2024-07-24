// React-router imports
import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

// Components
import {
  Landing,
  Error,
  Dashboard,
  Register
} from './pages'

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='landing' element={<Landing/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='*' element={<Error/>}/>
    </>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App