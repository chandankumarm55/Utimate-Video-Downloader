import React from 'react';
import './Content.css';
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Content = () => {
    return (
        <div className='content-container'>
            <div className="title">
                <span className='skyblue'>Ulti</span>mate <span className='red'>Video</span> Down<span className='orange'>loader</span>
            </div>
            <div className='description'>
                Discover a powerful tool for seamless downloads from YouTube, Facebook, Instagram, and X. Enhance your offline video library effortlessly with this dependable and efficient downloader.
            </div>
            <div className="absolute-icons">
                <div className="youtube"><FaYoutube /></div>
                <div className="facebook">< FaFacebook /></div>
                <div className="twitter"><BsTwitterX /></div>
                <div className="instagram"><GrInstagram /></div>
            </div>
        </div>
    );
}

export default Content;
