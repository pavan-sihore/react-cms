import { Link } from "react-router-dom"

function HeadNavbar() {
  return (
    <>
        {/* <!-- Heade Navbar for Logo and Menu --> */}
        <nav className="bg-white shadow-md" >
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <div className="text-2xl md:flex">
                  <div className="">
                    <Link to="/"><img className="h-20 w-full object-cover md:h-full md:w-24" src="./images/logo.png" title="website logo"/></Link>
                  </div>
                  <div className="py-4 px-1">
                    <div className="font-blinkerBold uppercase tracking-wide">Company Name</div>
                    <div className="font-blinkerThin text-base">Slogan Here</div>
                  </div>
                </div>
                
                <ul className="flex space-x-6">
                    <li><Link to="/sign-in">Login</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default HeadNavbar