import { Link } from 'react-router-dom'
import MainContainer from '../components/layout/MainContainer'

function PageNotFoundPage () {
  return (
    <MainContainer page='page-not-found-page'>
      <main>
        <h2>Whoops...</h2>
        <span>Error 404: Page not found</span>
      </main>
      <Link to='/' className='nav-link'>Return home</Link>
    </MainContainer>
  )
}

export default PageNotFoundPage