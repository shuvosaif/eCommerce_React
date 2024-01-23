import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* Nav Section */}
      <Navbar />
      {children}
      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Layout
