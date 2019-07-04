import React from 'react'
import CarouselComponent from './carousel'
import MovieList from './movieList'

function Home(){
    return(
        <>
            {/* We can use <></> instead of <React.Fragment></React.Fragment> */}
            <CarouselComponent />
            <MovieList/>
        </>
    )
}

export default Home