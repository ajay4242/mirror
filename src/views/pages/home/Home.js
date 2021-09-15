import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  Paper,
} from "@mui/material";
import {
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";

import WaveBorder from "../../../component/waveborder/WaveBorder";
import Lottyanimation from "../../../component/lotty/lottyanimation";
import one from "../../../component/lotty/lotty_file/one.json";
import Textanimation from "../../../component/textanimation/Textanimation";


AOS.init({ once: false })
const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {

    boxShadow: theme.shadows[4],
    marginTop: theme.spacing(-3),
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    // backgroundColor: theme.palette.secondary.main,

    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },
  mobileViewContent: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    },
  }


});;


function Home(props) {
  const { classes, theme, width } = props;
  return (
    <>
      {/* <div className={classNames("lg-p-top", classes.wrapper)}>
          <div className={classNames("container-fluid", classes.container)}> */}
      <Box display="flex" justifyContent="center" className="row">
        <Card
          className={classes.card}
          data-aos-delay="1000"
          data-aos="zoom-in"

        >
          <div className={classNames(classes.containerFix, "container")}>
            <Box justifyContent="space-between" className="row">
              <Grid item xs={12} md={5}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  height="100%"

                >
                  <Box mb={4} >
                    <Typography
                      variant={isWidthUp("lg", width) ? "h3" : "h4"}
                      color="#4a148c"
                    >
                      <Box component="div" display="inline" whiteSpace="nowrap">Automate your  <Textanimation Text={["Home", "Bussines", "Office"]} /></Box> With <strong><i>Openkite.</i></strong> And Facilitate the Lives
                    </Typography>

                  </Box>
                  <Hidden smUp>
                    <Grid item xs={12} md={6}  >
                      <Lottyanimation lottyfile={one} />
                    </Grid>
                  </Hidden>
                  <div>
                    <Box mb={2}>
                      <Typography
                        variant={isWidthUp("lg", width) ? "h7" : "body1"}
                        color="textSecondary"
                      >
                        <strong><i>Openkite's</i></strong> all modules provide a advance Intelligen 
                        Tchnology with embeded AI and Machine-learning
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      className={classes.extraLargeButton}
                      classes={{ label: classes.extraLargeButtonLabel }}
                      href=""
                    >
                      Register   For   Demo
                    </Button>
                  </div>
                </Box>
              </Grid>
              <Hidden smDown>
                <Grid item xs={12} order={{ xs: 1 }} md={6}  >

                  <Lottyanimation lottyfile={one} />
                </Grid>
              </Hidden>
            </Box>
          </div>
          <WaveBorder
            upperColor={theme.palette.secondary.main}
            lowerColor="#FFFFFF"
            className={classes.waveBorder}
            animationNegativeDelay={2}
          />
        </Card>

      </Box>
      {/* </div> 
        </div> */}
      {/* <WaveBorder
         upperColor={theme.palette.secondary.main}
          lowerColor="#FFFFFF"
          className={classes.waveBorder}
          animationNegativeDelay={2}
        /> */}
         <Paper elevation={9} >
                      <Typography
                        variant={isWidthUp("lg", width) ? "h5" : "body1"}
                        color="textSecondary"
                      >
                        <strong><i>Openkite's</i></strong> strategic partnership with google cloude provides 
                        coustuomers with a sustainable operactional advantegacross multiple industries
                      </Typography>
                      </Paper >

    </>
  );
}

Home.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(Home)
);