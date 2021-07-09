import { Grid as GridMaterial, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import Link from 'next/link'

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 100,
    },
    paper: {
        padding: 10,
        cursor: 'pointer'
    },
    description: {
        marginTop: 10
    },
    rating: {
        fontSize: "small",
    }
}))


export default function Grid({ data }) {
    const classes = useStyles()
    return (
        <GridMaterial className={classes.root} container spacing={2}>
            {data && data.map((movie, index) => {
                return <Link href={{
                    pathname: '/movie/[slug]/movieDetails',
                    query: { slug: movie.imdbID },
                }} key={index}>
                    <GridMaterial item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Image
                                priority={true}
                                src={movie.Poster !== "N/A" ? movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
                                width={150}
                                height={200}
                                alt={movie.Title}
                            />
                            <Typography variant="h5">{movie.Title}</Typography>
                            <Typography variant="subtitle2">{movie.Year}</Typography>
                        </Paper>
                    </GridMaterial>
                </Link>
            })}
            {data.length === 0 && <Typography>Not Found</Typography>}
        </GridMaterial>
    )
}