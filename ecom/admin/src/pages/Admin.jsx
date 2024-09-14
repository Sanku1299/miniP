import AddProduct from '../components/AddProduct'
import Sidebar from '../components/Sidebar'
import ListProduct from '../components/ListProduct'
import SalesGraph from '../components/SalesGraph'
import {Route, Routes} from 'react-router-dom'

const Admin = () => {
  return (
    <div className='lg:flex'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
        <Route path='/graph' element={<SalesGraph />} />
      </Routes>
    </div>
  )
}

export default Admin