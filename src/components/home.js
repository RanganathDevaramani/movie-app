import React from 'react'
import CarouselComponent from './carousel'
import MovieList from './movieList'
import ModalMovieList from './modalList'

function Home(){
    return(
        <>
            {/* We can use <></> instead of <React.Fragment></React.Fragment> */}
            <CarouselComponent />
            <MovieList/>
            <ModalMovieList />
        </>
    )
}

export default Home