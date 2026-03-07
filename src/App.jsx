import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Login from './pages/Login.jsx';
import ListSong from './pages/ListSong.jsx';
import AddAlbum from './pages/AddAlbum.jsx';
import ListAlbum from './pages/ListAlbum.jsx';
import AddSong from './pages/AddSong.jsx';
import {AuthProvider} from './context/AuthContext.jsx';
import ProctedRoutes from './components/ProtectedRoute.jsx';


export const API_BASE_URL = "http://localhost:8080";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position='top-center' />
        <Routes>
          <Route path = '/login' element={<Login />} />
          <Route path = '/add-song' element={
            <ProctedRoutes requiredAdmin={true}>
              <AddSong />
            </ProctedRoutes>
          } />
          <Route path = '/list-songs' element={
            <ProctedRoutes requiredAdmin={true}>
              <ListSong />
            </ProctedRoutes>
          } />
          <Route path = '/add-album' element={
            <ProctedRoutes requiredAdmin={true}>
              <AddAlbum />
            </ProctedRoutes>
          } />
          <Route path = '/list-albums' element={
            <ProctedRoutes requiredAdmin={true}>
              <ListAlbum />
            </ProctedRoutes>
          } />
          <Route path = '/' element={<Login />} />
          <Route path = '*' element={
            <ProctedRoutes requiredAdmin={true}>
              <AddSong />
            </ProctedRoutes>
          } />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
