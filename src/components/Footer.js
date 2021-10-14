import React from 'react';
import '../styles/Footer.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Link } from 'react-scroll';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer" id="footer">
            <Link activeClass="active" to="landing-page" spy={true} smooth={true} duration={800} href="" > 
              <ArrowCircleUpIcon fontSize="large" />
            </Link>
            <p>Don't hesitate to contact me at <a href="mailto: shaishav.shah04@gmail.com">shaishav.shah04@gmail.com</a> for any questions!</p>
        </div>
        <p id="copy-right">&#169; Copyright 2021 Shaishav Shah</p>
      </div>
    )
  }
}

export default Footer
