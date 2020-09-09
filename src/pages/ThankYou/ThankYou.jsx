import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BkgndImage from '../../assets/ThankYou-Bg.png';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
}));


export default function ThankYou() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent} style={{ backgroundImage: `url(${BkgndImage})`, backgroundPosition:"center", backgroundSize:"contain", backgroundRepeat:"no-repeat", width:"400px", height:"400px"}}>
                <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"80px"}}>
                    Thank You :)
            </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p" style={{fontSize:"20px"}}>
                    Thank You For Your Valuable Feedback
            </Typography>
            </Container>
            {/* End hero unit */}
        </React.Fragment>
    );
}