import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Input.css'
import { FaSearch } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";

const Input = () => {
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [videoData, setVideoData] = useState(null)

    const handleDownload = async () => {
        setVideoData(null)
        setLoading(true);
        try {

            const response = await axios.get(`https://vkrdownloader.vercel.app/server`, {
                params: { vkr: inputValue },
                responseType: 'json',
                cache: 'default'
            })
            console.log(response)

            setVideoData(response.data.data)
            setInputValue('')
            setLoading(false)


        } catch (error) {
            console.log(error)
        }

    }

    const getParameterByName = (name, url) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        const results = regex.exec(url);

        if (!results) return '.';
        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    const getBackgroundColor = (downloadUrlItag) => {
        const greenFormats = ['17', '18', '22'];
        const blueFormats = ['139', '140', '141', '249', '250', '251', '599', '600'];

        if (greenFormats.includes(downloadUrlItag)) {
            return 'green';
        } else if (blueFormats.includes(downloadUrlItag)) {
            return '#3800ff';
        } else {
            return 'red';
        }
    };

    return (
        <>

            <div className='main-input-container'>
                <div className="input-container">
                    <FaSearch className='icon' />
                    <input type='text' required placeholder='Dump Your URL..'
                        value={ inputValue } onChange={ e => setInputValue(e.target.value) }
                    />
                    <button className='serach' onClick={ handleDownload }>Search</button>
                </div>
            </div >

            {
                loading && (
                    <div className="main-loader">
                        <div className="loader">

                        </div>
                    </div>

                )
            }

            {
                videoData && (
                    <div className="result-container">
                        <div className="card">
                            <div className="frontimage">
                                <img src={ videoData.thumbnail } alt='frist poge of the video' />
                            </div>
                            <div className="title-description">
                                <h1>{ videoData?.title }</h1>
                                <p>{ videoData?.description }</p>
                            </div>

                        </div>

                        <div className="main-download">
                            <div className="download-card">
                                { videoData.downloads.map((download, index) => (
                                    <a href={ download.url } key={ index }>
                                        <button className="dlbtns" style={ { background: getBackgroundColor(getParameterByName('itag', download.url)) } }>
                                            <TbDownload />{ download.extension } { getParameterByName('itag', download.url) } { download.format_id }
                                        </button>
                                    </a>


                                )) }

                            </div>
                        </div>

                    </div>
                )
            }


        </>
    )
}

export default Input
