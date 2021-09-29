import React from 'react';
import '../styles/Footer.css';
import { MailOutline } from '@mui/icons-material';

function Footer() {
  return (
    <div>
      <div className="footer" id="footer">
          <p>Don't hesitate to contact me at <a href="mailto: shaishav.shah04@gmail.com">shaishav.shah04@gmail.com</a> for any questions!</p>
      </div>
      <p id="copy-right">&#169; Copyright 2021 Shaishav Shah</p>
    </div>
  )
}

export default Footer
