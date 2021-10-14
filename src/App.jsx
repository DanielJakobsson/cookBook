import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Breadcrumbs } from '@material-ui/core';
import { CardTravelSharp, PhotoCamera } from '@material-ui/icons';
import useStyles from './style';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    const classes = useStyles();
    return (
    <> 
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
                <Typography variant="h6">
                    CookCook
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
               <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        CookBook
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Hello fellow gastronomers! 
                        Here you will find some of my favourite recipies and some valueable cooking tricks. You might also find some products in my webshop.
                    </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                            <Button variant="outlined" color="primary">
                                    See recipy
                                </Button>
                                <Button variant="outlined" color="primary">
                                    Cooking step by step
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

        <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                image="http://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.CardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Recipy
                                        <Breadcrumbs>
                                        <ui>
                                            <li>ingredient</li>
                                            <li>ingredient</li>
                                            <li>ingredient</li>
                                            <li>ingredient</li>
                                        </ui>
                                        </Breadcrumbs>
                                    </Typography>
                                    <Typography>
                                        
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Viev</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions> 
                            </Card>
                        </Grid>
                    ))}  
                </Grid>                  
            </Container>
        </main>
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                Something to give the footer a purpose
            </Typography>
        </footer>
    </>);
}
export default App;

