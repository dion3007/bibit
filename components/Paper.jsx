import { Grid as GridMaterial, Paper as PaperMaterial, Typography } from '@material-ui/core'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 20
    },
    paper: {
        padding: 10,
    },
    description: {
        marginTop: 10
    },
    rating: {
        fontSize: "small",
    }
}))

export default function Paper({ movie }) {
    const classes = useStyles()
    return (
        <GridMaterial container spacing={2}>
            {movie &&
                <GridMaterial item xs={12}>
                    <Typography className={classes.title} variant="h3">Detail</Typography>
                    <PaperMaterial className={classes.paper}>
                        <Image
                            priority={true}
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
                            width={150}
                            height={200}
                            alt={movie.Title}
                        />
                        <Typography variant="h5">{movie.Title}</Typography>
                        <Typography variant="subtitle2">{movie.Year}</Typography>
                        <GridMaterial container spacing={3} className={classes.description}>
                            <GridMaterial item xs={6}>
                                <Typography>Actors: {movie.Actors}</Typography>
                            </GridMaterial>
                            <GridMaterial item xs={6}>
                                <Typography>Awards: {movie.Awards}</Typography>
                            </GridMaterial>
                        </GridMaterial>
                    </PaperMaterial>
                </GridMaterial>
            }
        </GridMaterial>
    )
}