import React from 'react';
import  {Link} from 'react-router-dom';

function Footer(props){
    return(
      <div className="footer">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul className="list-unstyled">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/aboutus">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                </ul>
            </div>
            <div className="col-7 col-sm-5">
                <h5>Our Address</h5>
                <address>
              121, Gokuldham Society, Goregaon, Mumbai 400101<br />
               +91 8888000111<br />
               +91 8888000222<br />
               <a href="onestopbikes@bike.net">
                     onestopbikes@bike.net</a>
                </address>
            </div>

        </div>
        <div className="row justify-content-center">
            <div className="col-auto">
                <p>© Copyright 2020 OneStopBikes</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default Footer;
