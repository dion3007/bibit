import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppBar, Toolbar, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { findMovies } from '../helper/api'

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "space-between"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header({ searchMovie, noSearch }) {
    const classes = useStyles()
    const [movies, setMovies] = React.useState([])
    const onChangeSearch = (event) => {
        if (event.key === 'Enter') {
            searchMovie(event.target.value)
        }
    };
    const onInputChange = async (e) => {
        const searchText = e.target.value || ''
        if (searchText.length > 2) {
            const movies = await findMovies(searchText, 1)
            if (movies) {
                setMovies(movies)
            }
        }
    }
    return (
        <AppBar
            color="default"
        >
            <Toolbar className={classes.root}>
                <Link href="/">
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                        <Image
                            src="/logo.png"
                            width={100}
                            height={50}
                            alt="logo"
                        />
                    </IconButton>
                </Link>
                {!noSearch && <Autocomplete
                    id="combo-box-demo"
                    options={movies}
                    getOptionLabel={(option) => option.Title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} onChange={onInputChange}
                        onKeyDown={onChangeSearch} label="Search" variant="outlined" />}
                />}
            </Toolbar>
        </AppBar>
    )
}
