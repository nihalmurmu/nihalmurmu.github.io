import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Tooltip, Divider } from "@material-ui/core";
import { Mail, InsertDriveFile } from "@material-ui/icons";

const styles = theme => ({
  root: {},
  aboutHeader: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#000000"
  },
  about: {
    maxWidth: "800px"
  },
  aboutContent: {
    margin: theme.spacing.unit * 5
  },
  icons: {
    margin: theme.spacing.unit * 3
  },
  profile: {
    display: "inline-flex",
    justifyContent: "center"
  },
  profileSection: {
    width: 300
  },
  "& a": {
    textDecoration: "none"
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;
    const icons = [
      [
        <Tooltip title="mail">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:nhlmrm@gmail.com"
          >
            <IconButton>
              <Mail />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="twitter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/nihalmurmu"
          >
            <IconButton>
              <ion-icon name="logo-twitter" />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="linkedin">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/nihalmurmu"
          >
            <IconButton>
              <ion-icon name="logo-linkedin" />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nihalmurmu"
          >
            <IconButton>
              <ion-icon name="logo-github" />
            </IconButton>
          </a>
        </Tooltip>
      ],
      [
        <Tooltip title="resume">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nihalmurmu.me/resume.pdf"
          >
            <IconButton>
              <InsertDriveFile />
            </IconButton>
          </a>
        </Tooltip>
      ]
    ];
    return (
      <div className={classes.root}>
        <header className={classes.aboutHeader}>
          <div className={classes.about}>
          <Typography
              variant="h2"
              color="inherit"
              gutterBottom
              className={classes.aboutContent}
            >
              About
            </Typography>
            <Divider/>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              className={classes.aboutContent}
            >
              I believe in learning by doing
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              className={classes.aboutContent}
            >
              Currently I'm curious about Blockchain and game development.
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              className={classes.aboutContent}
            >
              I'm constantly learning on various topics such as user experience,
              marketing, finance and supply chain and etc. That's helping me to
              to broaden my vision and let me able to see within the user
              perspective beyond the technical capabilities.
            </Typography>
            <Typography variant="body2" color="inherit">
              Take a tour of my projects
            </Typography>
          </div>
          <Grid
            container
            justify="center"
            spacing={16}
            className={classes.icons}
          >
            {icons.map(value => (
              <Grid item>{value}</Grid>
            ))}
          </Grid>
          <Grid
            container
            justify="center"
            spacing={32}
            className={classes.profile}
          >
            <Grid item className={classes.profileSection}>
              <Typography variant="body1" color="inherit">
                Education
              </Typography>
              <Typography variant="body1" color="inherit">
                Silicon Institute of Technology
              </Typography>
            </Grid>
            <Grid item className={classes.profileSection}>
              <Typography variant="body1" color="inherit">
                Work
              </Typography>
              <Typography variant="body1" color="inherit">
                nil
              </Typography>
            </Grid>
            <Grid item className={classes.profileSection}>
              <Typography variant="body1" color="inherit">
                Location
              </Typography>
              <Typography variant="body1" color="inherit">
                Odisha, India
              </Typography>
            </Grid>
          </Grid>
        </header>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(About);