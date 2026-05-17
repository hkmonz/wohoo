import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import woohooLogo from '../../assets/Icons/logo-white.svg'

function Base() {
  return (
    <div>
        <Header/>
        <Outlet/>
       <Footer logoUrl={woohooLogo} />
    </div>
  )
}

export default Base