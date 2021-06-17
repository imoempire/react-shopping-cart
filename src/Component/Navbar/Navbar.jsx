import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Sizes</a> <br />
          </div>
          
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">16 Product(s) found </a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Order by</a>
              </li>
              {/* <!-- Single button --> */}
              <div className="btn-group Select-button">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Select <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </ul>
          </div>
       {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* // <!-- /.container-fluid --> */}
      </nav>
    
    );
}

export default Navbar;
