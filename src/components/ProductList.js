import React from 'react'


import ProductListItem from './ProductListItem'
import useStyles from '../assets/css/ProductStyles'
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';

const ProductList = ({ posts, loading }) => {


    const classes = useStyles();
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="left" spacing={4}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
                            <ProductListItem product={post} />
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>

    );
};

export default ProductList;



