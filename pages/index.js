import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { findMovies } from '../helper/api'
import Header from '../components/Header'
import Grid from '../components/Grid'

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 100,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  }
}))

export default function Home({ }) {
  const classes = useStyles()
  const [movies, setMovies] = React.useState([])
  const searchMovie = async (keyword) => {
    const movies = await findMovies(keyword, 1)
    setMovies(movies)
  }
  return (
    <div>
      <Head>
        <title>Starships App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header searchMovie={searchMovie} noSearch={false} />
      <Container className={classes.main}>
      <Grid data={movies} />
        {/* {movies.next !== null && <Button
          className={classes.button}
          onClick={() => loadMoreStarships({ page: objStarship })}
          variant="contained"
          color="primary"
        >
          Load More
        </Button>} */}
      </Container>
    </div>
  )
}
