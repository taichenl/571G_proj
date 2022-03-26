import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import "./index.css";

const Dashboard = () => {
    //called only once
    // useEffect(() => { //TODO: implement

    // }, []);


    // function addSmartContractListener() { //TODO: implement
    //     // watch for contract's pollCreated event
    //     // and update our UI when new event added 
    // }

    // function addWalletListener() { //TODO: implement
    //     // if wallet account address changed change
    //     // force back to the first page and repay the entry fee
    // }

    // const onViewResultsPressed = async () => { //TODO: implement

    // };

    const useStyles = makeStyles(theme => ({
        largeIcon: {
            '& svg': {
                fontSize: 60
            }
        },
        root: {
            flexGrow: 1,
            padding: theme.spacing(2)
        }
    }))
    const classes = useStyles()
    const data = [
        { pollNumber: 1, participants: 13000 },
        { pollNumber: 2, participants: 16500 },
        { pollNumber: 3, participants: 14250 },
        { pollNumber: 4, participants: 19000 }
    ]
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item xs={12}>
                    <a href="/PollBoard" className="btn btn-create">Create a <span>New Poll</span></a>
                </Grid>
                {data.map(elem => (
                    <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                        <Card>
                            <CardHeader
                                title={`Poll : ${elem.pollNumber}`}
                                subheader={`Participants Number : ${elem.participants}`}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Hello World
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" >Participate</Button>
                                <Button size="small">View Results</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default Dashboard;