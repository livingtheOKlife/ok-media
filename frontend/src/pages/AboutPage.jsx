import { Link } from 'react-router-dom'

import MainContainer from '../components/layout/MainContainer'

function AboutPage () {
  return (
    <MainContainer page='about-page'>
      <header>
        <span className="logo"><em>OK</em>media</span>
        <span className="brand">livingthe<em>OK</em>life</span>
      </header>
      <main>
        <h5>Did you know...</h5>
        <span>... in The Hitchhiker&apos;s Guide to the Galaxy, by Douglas Adams, he chose the number 42 for the meaning of life?</span>
        <span>But why? <em>42</em> corresponds to the asterisk (*) symbol in ASCII code. As developers, we use the asterisk to refer to anything, or everything. To me, this means that the supercomputer from the book could not define the meaning of life because the meaning is not singular. Instead, it is simply anything, and everything you want it to be.</span>
        <span>Life is what you make of it. Some search a lifetime to find why they are here, and what they want to do with the time they have. Don&apos;t spend your days searching for your place in the world, because it is probably already right in front of you. In the people you meet, the lives to you touch, and even the work that you do.</span>
      </main>
    </MainContainer>
  )
}

export default AboutPage