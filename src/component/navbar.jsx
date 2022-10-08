import React from 'react';


    const NavBar = props => {

        // console.log('NavBar - Rendered');

       return (
            <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a href="#" className="navbar-brand" >
        Navbar{""}
        <span className="badge badge-pill rounded-pill bg-danger">
            {props.totalCounters}
        </span>
    </a>
  </div>
</nav>
        );
    };

export default NavBar;