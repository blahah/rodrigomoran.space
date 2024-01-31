export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 6h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
        <a
          className="text-nowrap md:pl-4 lg:pl-4"
          href="/"
        >
          RODRIGO MORÁN
        </a>
      </div>
      <div className="navbar-end hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  );
}