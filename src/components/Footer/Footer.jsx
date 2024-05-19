import React from 'react';
import "./Footer.scss";
import ContactForm from '../Contact/Contact';
// import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';

// import { FaGithub ,FaMedium,FaLinkedin} from "@react-icons/all-files/fa";


import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaMedium } from "@react-icons/all-files/fa/FaMedium";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";


export default function Footer() {

    const links = ["Github", "Medium", "Linked In"]

    return (
        <div className='footer-parent'>


            <div className="row">
                <div className="column left" >
                    <a href='https://github.com/Muddabirchohan'>
                        <span>
                            <FaGithub
                                className='textLinksIcon'
                                style={{ marginLeft: 20 }} size={50}
                            />
                            {/* {links[0]} */}
                        </span>
                        <span className='textLinks'>

                            {links[0]}
                        </span>
                    </a>
                    {/* <span>{links[0]}</span> */}

                    {/* <p>Some text..</p> */}
                </div>

                <div className="column middle" >
                    <a href='https://medium.com/@muddabir22'>

                        <span>
                            <FaMedium
                                className='textLinksIcon'

                                style={{ borderRadius: "20%", marginLeft: 30 }} size={50}

                            />
                        </span>
                        <span className='textLinks'>

                            {links[1]}
                        </span>
                    </a>
                    {/* <p>Some text..</p> */}
                </div>
                <div className="column right" >
                    <a href='https://www.linkedin.com/in/muddabir-chohan-328070162/'>

                        <span>
                            <FaLinkedin
                                className='textLinksIcon'

                                style={{ marginLeft: 20 }} size={50}

                            />
                        </span>
                        <span className='textLinks'>

                            {links[2]}
                        </span>
                    </a>
                    {/* <p>Some text..</p> */}
                </div>
            </div>




        </div>
    )
}
