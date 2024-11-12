import { Button } from '@mui/material';
import axios from '../../utils/axios';
import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchMovie();
    }, []); // empty dependency array so it runs once

    // Example truncate function
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    return (
        <div className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`, // Fixed string interpolation
                backgroundPosition: "center",
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button play'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
            </div>
        </div>
    );
};

export default Banner;
