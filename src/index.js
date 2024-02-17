import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Category from './pages/Category';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import About from './pages/About';
import Blogs from './pages/Blogs';
import FAQs from './pages/FAQs';
import CorpInfo from './pages/CorpInfo';
import SiteMap from './pages/SiteMap';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import TrackOrders from './pages/TrackOrders';
import Contact from './pages/Contact';
import Cancellation from './pages/Cancellation';
import TermsService from './pages/TermsService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Auth from './pages/Auth';
import Admin from './admin/Admin';
import AdminCategory from './admin/Forms/AdminCategory';
import AdminProducts from './admin/Forms/AdminProducts';
import AdminOrders from './admin/Tables/AdminOrders';
import AdminUsers from './admin/Tables/AdminUsers';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/category/:slug',
        element:<Category/>
      },
      {
        path:'/product/:id',
        element:<ProductDetails/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/checkout',
        element:<Checkout/>
      },
      {
        path:'/payment',
        element:<Payment/>
      },
      {
        path:'/confirmation',
        element:<Confirmation/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/faqs',
        element:<FAQs/>
      },
      {
        path:'/corporate_information',
        element:<CorpInfo/>
      },
      {
        path:'/site_map',
        element:<SiteMap/>
      },
      {
        path:'/track_orders',
        element:<TrackOrders/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/cancellation',
        element:<Cancellation/>
      },
      {
        path:'/terms_and_services',
        element:<TermsService/>
      },
      {
        path:'/privacy_policy',
        element:<PrivacyPolicy/>
      },
    ]
  },
  {
    path:'/admin',
    element: <Admin/>,
    children: [
      {
        path:'/admin/category',
        element:<AdminCategory/>
      },
      {
        path:'/admin/products',
        element:<AdminProducts/>
      },
      {
        path:'/admin',
        element:<AdminOrders/>
      },
      {
        path:'/admin/orders',
        element:<AdminOrders/>
      },
      {
        path:'/admin/users',
        element:<AdminUsers/>
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}></RouterProvider>
);

