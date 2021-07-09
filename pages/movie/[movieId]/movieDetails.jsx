import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { movieDetail } from '../../../helper/api'
import Header from '../../../components/Header'
import Paper from '../../../components/Paper'
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
    main: {
        marginTop: 100,
    }
}))

export default function movieDetails() {
    const classes = useStyles()
    const [movies, setMovies] = React.useState()
    const { query } = useRouter()
    const movieId = query.movieId
    useEffect(async () => {
        if (movieId) {
            const movie = await movieDetail(movieId)
            setMovies(movie)
        }
    }, [movieId])
    return (
        <div>
            <Head>
                <title>movies App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header noSearch={true} />
            <Container className={classes.main}>
                <Paper movie={movies} />
            </Container>
        </div>
    )
}
