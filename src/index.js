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
import AdminCategory from './admin/Tables/CategoriesTable';
import AdminProducts from './admin/Tables/ProductsTable';
import AdminOrders from './admin/Tables/OrdersTable';
import AdminUsers from './admin/Tables/UsersTable';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import CategoryForm from './admin/Forms/CategoryForm';
import ProductForm from './admin/Forms/ProductForm';
import OrderForm from './admin/Forms/OrderForm';
import UserForm from './admin/Forms/UserForm';
import Otp from './pages/Otp';
import Forgot from './pages/Forgot';
import NewPassword from './pages/NewPassword';
import MyProfile from './components/MyProfile';
import MyOrders from './components/MyOrders';
import Payments from './components/Payments';
import AccountSettings from './components/AccountSettings';
import MyStuffs from './components/MyStuffs';

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
        element:<Auth/>,
        children:[
          {
            path:'/auth',
            element:<Signin/>
          },
          {
            path:'/auth/signin',
            element:<Signin/>
          },
          {
            path:'/auth/signup',
            element:<Signup/>
          },
          {
            path:'/auth/otp',
            element:<Otp/>
          },
          {
            path:'/auth/forgot',
            element:<Forgot/>
          },
          {
            path:'/auth/new-password',
            element:<NewPassword/>
          },
        ]
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
        path:'/confirmation/:orderId',
        element:<Confirmation/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      },
      {
        path:'/profile',
        element:<Profile/>,
        children:[
          {
            path:'/profile',
            element:<MyProfile/>
          },
          {
            path:'/profile/my-orders',
            element:<MyOrders/>
          },
          {
            path:'/profile/payments',
            element:<Payments/>
          },
          {
            path:'/profile/account-settings',
            element:<AccountSettings/>
          },
          {
            path:'/profile/my-stuffs',
            element:<MyStuffs/>
          },
        ]
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
        path:'/corporate-information',
        element:<CorpInfo/>
      },
      {
        path:'/site-map',
        element:<SiteMap/>
      },
      {
        path:'/track-orders',
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
        path:'/terms-and-services',
        element:<TermsService/>
      },
      {
        path:'/privacy-policy',
        element:<PrivacyPolicy/>
      },
    ]
  },
  {
    path:'/admin',
    element: <Admin/>,
    children: [
      {
        path:'/admin',
        element:<AdminOrders/>
      },
      {
        path:'/admin/categories',
        element:<AdminCategory/>
      },
      {
        path:'/admin/add-category',
        element:<CategoryForm/>
      },
      {
        path:'/admin/products',
        element:<AdminProducts/>
      },
      {
        path:'/admin/add-product',
        element:<ProductForm/>
      },
      {
        path:'/admin/orders',
        element:<AdminOrders/>
      },
      {
        path:'/admin/edit-order',
        element:<OrderForm/>
      },
      {
        path:'/admin/users',
        element:<AdminUsers/>
      },
      {
        path:'/admin/edit-user',
        element:<UserForm/>
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}></RouterProvider>
);

