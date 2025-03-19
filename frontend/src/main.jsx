import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import { AlertProvider } from './context/alert/AlertContext.jsx'
import { MenuProvider } from './context/menu/MenuContext.jsx'
import { ModalProvider } from './context/modal/ModalContext.jsx'

import './index.css'
import App from './App.jsx'

import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import VerifyEmailPage from './pages/VerifyEmailPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import UpdatePasswordPage from './pages/UpdatePasswordPage.jsx'
import AccountPage from './pages/AccountPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ExplorePage from './pages/ExplorePage.jsx'
import PageNotFoundPage from './pages/PageNotFoundPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/verify-email' element={<VerifyEmailPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      <Route path='/update-password' element={<UpdatePasswordPage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/settings' element={<SettingsPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/explore' element={<ExplorePage />} />
      <Route path='/page-not-found' element={<PageNotFoundPage />} />
      <Route path='/*' element={<Navigate to="/page-not-found" replace />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <AlertProvider>
    <MenuProvider>
      <ModalProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </ModalProvider>
    </MenuProvider>
  </AlertProvider>,
)
