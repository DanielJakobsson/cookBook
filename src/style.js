import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contanier: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 2, 6)
    },
    icon: {
        marginRight: '20px',
    },
    Button: {
        marginTop: '40px',
    },
    cardGrid: {
            padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));
export default useStyles;
