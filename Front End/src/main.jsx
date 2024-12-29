import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Common/Home.jsx'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import AdminProfile from './Admin Block/AdminProfile.jsx'
import Admin from './Common/Admin.jsx'
import Size from './Admin Block/Size.jsx'
import AddColor from './Admin Block/AddColor.jsx'
import ViewColor from './Admin Block/ViewColor.jsx'
import MainContext from './Main Context/MainContext.jsx'
import AddCategory from './Admin Block/AddCategory.jsx'
import ViewCategory from './Admin Block/ViewCategory.jsx'
import AddSubCategory from './Admin Block/AddSubCategory.jsx'
import ViewSubCategory from './Admin Block/ViewSubCategory.jsx'
import ProductDetails from './Admin Block/ProductDetails.jsx'
import ProductItems from './Admin Block/ProductItems.jsx'
import StoryDetail from './Admin Block/StoryDetail.jsx'
import StoryView from './Admin Block/StoryView.jsx'
import Orders from './Admin Block/Orders.jsx'
import SliderDetail from './Admin Block/SliderDetail.jsx'
import SliderView from './Admin Block/SliderView.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Admin Block/Footer.jsx'
import ViewSize from './Admin Block/viewSize.jsx'
import 'react-responsive-pagination/themes/classic.css';
let r=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/admin',
      element:<AdminProfile />
    },
    {
      path:'/profile',
      element:<AdminProfile />
    },
    {
      path:'/size',
      element:<Size />
    },
    {
      path:'/view-size',
      element:<ViewSize />
    },
    {
      path:'/add-color',
      element:<AddColor />
    },
    {
      path:'/view-color',
      element:<ViewColor />
    },
    {
      path:'/add-category/:id?',
      element:<AddCategory />
    },
    {
      path:'/view-category',
      element:<ViewCategory />
    },
    {
      path:'/add-sub-category',
      element:<AddSubCategory />
    },
    {
      path:'/view-sub-category',
      element:<ViewSubCategory />
    },
    {
      path:'/product-details',
      element:<ProductDetails />
    },
    {
      path:'/product-items',
      element:<ProductItems />
    },
    {
      path:'/story-details',
      element:<StoryDetail />
    },
    {
      path:'/story-view',
      element:<StoryView />
    },
    {
      path:'/orders',
      element:<Orders />
    },
    {
      path:'/slider-details',
      element:<SliderDetail />
    },
    {
      path:'/slider-view',
      element:<SliderView />
    },
    // {
    //   path:'/footer',
    //   element:<Footer />
    // }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <MainContext>
  <RouterProvider router={r} />
  </MainContext>
   {/* <Link to={'/'}>Home</Link> */}
  </StrictMode>
)
