import { StrictMode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux'; // Import Provider and useDispatch
import authService from './appwrite/auth'; // Your authentication service
import { login, logout } from './store/authSlice'; // Redux actions
import { Footer, Header } from './components'; // Your components
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import SignUp from './components/Signup/Signup.jsx';
import './index.css';
import store from './store/store.js'; // Import your Redux store


function MainApp() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })); // Dispatch login action if user is found
        } else {
          dispatch(logout()); // Dispatch logout action if no user is found
        }
      })
      .finally(() => setLoading(false)); // Set loading to false when done
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* Use Outlet to render child routes */}
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

// Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

// Main app rendering with Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrapping with Provider and passing store */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);


