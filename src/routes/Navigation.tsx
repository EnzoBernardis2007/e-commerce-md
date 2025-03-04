import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landpage from '../pages/Landpage'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Layout from '../pages/Layout'
import Product from '../pages/Product'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Landpage /> }/>
        <Route path='signin' element={ <Signin /> }/>
        <Route path='signup' element={ <Signup /> }/>
        <Route path='layout' element={ <Layout /> }>
          <Route path='product' element={ <Product /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
