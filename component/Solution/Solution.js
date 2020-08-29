import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
        minWidth:'310px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '75.25%',
      backgroundPosition:'center'
    },
    cardContent: {
      flexGrow: 1,
    }
  });


class Solutions extends Component {
    render() {
        const {classes} = this.props;

        return (
              
                <Grid item key={this.props.key}  >
                   
                  <Card className={classes.card} style={{minHeight:'550px', width:'320px'}}>
                    <img
                      
                      src={this.props.thumbnail}
                      title={this.props.heading}
                      style={{backgroundColor:'black', width:'100%',maxHeight:'250px'}}
                    />
                    <CardContent className={classes.cardContent} >
                      <Typography gutterBottom variant="h5" component="h2">
                      {this.props.heading}
                      </Typography>
                      <Typography>
                       {this.props.content}
                      </Typography>
                    </CardContent>
                    
                  </Card>
                </Grid>
                                    
        )
    }
}

export default withStyles(styles, { withTheme: true })(Solutions);