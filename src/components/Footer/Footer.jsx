import React from 'react';
import "./Footer.scss";
import ContactForm from '../Contact/Contact';

export default function Footer() {

    const links = ["Github","Facebook","Instagram","Snapchat"]

  return (
    <div className='footer-parent'>
       

        {/* {links.map(item=> {
            return(
            <div className='textLinks container'> 
            <span> icon </span>
            <span> {item} </span>
             </div>
            )
            })} */}
            
            
            <div className="row">
  <div className="column left" >
    <span className='textLinks'>{links[0]}</span>
    <span className='textLinks'>{links[0]}</span>

    {/* <p>Some text..</p> */}
  </div>
  <div className="column middle" >
  <span className='textLinks'>{links[1]}</span>
    {/* <p>Some text..</p> */}
  </div>
  <div className="column right" >
  <span className='textLinks'>{links[2]}</span>
    {/* <p>Some text..</p> */}
  </div>
</div>

<div className='contact' id='contact' >
        <ContactForm />
      </div>


    </div>
  )
}
