import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import $ from 'jquery';

const App = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [videoData, setVideoData] = useState(null);

    const handleInputChange = (e) => {
        setInputUrl(e.target.value);
    };

    const handleDownload = async() => {
        setLoading(true);

        try {
            const response = await axios.get(`https://vkrdownloader.vercel.app/server`, {
                params: { vkr: inputUrl },
                responseType: 'json',
                cache: 'default',
            });

            setVideoData(response.data.data);
            setLoading(false);
        } catch (error) {
            alert(`Error: ${error.message}. Please try again later.`);
            setLoading(false);
        }
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

    const getParameterByName = (name, url) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        const results = regex.exec(url);

        if (!results) return '.';
        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    return ( <
        div >
        <
        header className = "bg-dark text-white" >
        <
        nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
        <
        a className = "navbar-brand"
        href = "#" > VkrDownloader < /a> <
        button className = "navbar-toggler"
        type = "button"
        data - toggle = "collapse"
        data - target = "#navbarNav"
        aria - controls = "navbarNav"
        aria - expanded = "false"
        aria - label = "Toggle navigation" >
        <
        span className = "navbar-toggler-icon" > < /span> < /
        button > <
        div className = "collapse navbar-collapse"
        id = "navbarNav" >
        <
        ul className = "navbar-nav ml-auto" >
        <
        li className = "nav-item active" >
        <
        a className = "nav-link"
        href = "#" > Home < /a> < /
        li > <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "#" > Service < /a> < /
        li > <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "https://theofficialvkr.xyz/" > Follow < /a> < /
        li > <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "mailto:contactvkr@yahoo.com" > Contact < /a> < /
        li > <
        /ul> < /
        div > <
        /nav> < /
        header >

        <
        div className = "container mt-5" >
        <
        div className = "row" >
        <
        div className = "col-md-10 mx-auto" >
        <
        div className = "form-group" >
        <
        input id = "inputUrl"
        type = "url"
        className = "form-control"
        placeholder = "Enter URL"
        value = { inputUrl }
        onChange = { handleInputChange }
        /> < /
        div > <
        button id = "downloadBtn"
        onClick = { handleDownload }
        type = "submit"
        className = "btn btn-primary" >
        Download <
        /button> < /
        div > <
        /div>

        {
            loading && ( <
                div id = "loading"
                className = "text-center mt-3" >
                <
                div className = "centerV" >
                <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> <
                div className = "wave" > < /div> < /
                div > <
                /div>
            )
        }

        {
            videoData && ( <
                div id = "container"
                className = "text-center mt-3" >
                <
                div id = "thumb"
                className = "mb-3" >
                <
                img src = { videoData.thumbnail }
                width = "300px"
                alt = "Thumbnail" / >
                <
                /div> <
                div id = "title" >
                <
                h1 > { videoData.title.replace(/\+/g, ' ') } < /h1> < /
                div > <
                div id = "description"
                className = "mt-3" >
                <
                h3 >
                <
                details >
                <
                summary > View Description < /summary> { videoData.description } < /
                details > <
                /h3> < /
                div > <
                div id = "uploader" >
                <
                h5 > { videoData.url } < /h5> < /
                div > <
                div id = "duration" >
                <
                h5 > { videoData.size } < /h5> < /
                div > <
                div id = "download" > {
                    videoData.downloads.map((download, index) => ( <
                        a href = { download.url }
                        key = { index } >
                        <
                        button className = "dlbtns"
                        style = {
                            { background: getBackgroundColor(getParameterByName('itag', download.url)) }
                        } > { download.extension } { getParameterByName('itag', download.url) } { download.format_id } <
                        /button> < /
                        a >
                    ))
                } <
                /div> < /
                div >
            )
        }

        <
        div id = "content"
        className = "text-center mt-3" >
        <
        h2 > Online Download Videos < /h2> <
        p >
        Vkrdownloader - Video Downloader by Vijay Kumar is an excellent service that helps to download online videos,
        Thumbnails, and music quickly and free of charge... <
        /p> < /
        div > <
        /div>

        <
        footer className = "bg-dark text-white text-center py-3 mt-5" >
        Powered By Vijay Kumar <
        /footer> < /
        div >
    );
};

export default App;