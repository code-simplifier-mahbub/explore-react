import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Main from './components/Outlet/Main';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetails/FriendDetail';


function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/home', element: <Home></Home>
        },
        {
          path: '/about', element:<About></About> 
        },
        {
          path: '/contact', element: <ContactUs></ContactUs>
        },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          }, 
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetail></FriendDetail>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}


export default App;
