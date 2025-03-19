import { Link } from 'react-router-dom'
import MainContainer from '../components/layout/MainContainer'

function HomePage () {
  return (
    <MainContainer page='home-page'>
      <header>
        <span className="logo"><em>OK</em>media</span>
        <span className="brand">livingthe<em>OK</em>life</span>
      </header>
      <main>
        <span>Home of the world's most trending social media application</span>
        <span>Chat with friends, upload your pictures, and loads more with <span className="logo"><em>OK</em>media</span></span>
      </main>
      <nav className='home-nav'>
        <ul>
          <li>
            <span>Not a Member?</span>
            <Link to='/register'>Sign up</Link>
          </li>
          <li>
            <span>Already a member?</span>
            <Link to='/login'>Sign in</Link>
          </li>
          <li>
            <span>or...</span>
            <Link to='/explore'>Explore as a guest</Link>
          </li>
        </ul>
      </nav>
    </MainContainer>
  )
}

export default HomePage