import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <p>Website gemaakt door Darya van Tienhoven <br />Contact: daryaheleen@gmail.com</p>
            <a href="https://www.linkedin.com/in/darya-van-tienhoven/" target="_blank">
                <FaLinkedin />
            </a>
            <a href="https://github.com/DHvanTienhoven" target="_blank">
                <FaGithub />
            </a>
        </footer>
    )
}

export default Footer
