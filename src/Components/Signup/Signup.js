import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "antd";
import { motion } from "framer-motion";

function SignUp() {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,

      // border: "2px solid #000",
      // backgroundImage: "linear-gradient(#4c87df, #1854b1, #2233ac)",
      backgroundColor: "white",
      // color: "white",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "30%",
      height: "70%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          handleOpen()
        }}
        className="sectionButton"
        style={{
          color: "#4285f4",
          fontSize: "20px",
          height: "50px",
          borderRadius: "5px",
          border: "none",
          width: "200px",
          cursor: "pointer"
          // backgroundColor:
        }}
      >
        Get Started
          </Button>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              className="thin1"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  sign up now as a teacher
              </div>
                <br />
                <br />

                <input
                  type="text"
                  placeholder="Name"
                  style={{
                    height: "30px",
                    width: "70%",
                    paddingLeft: "20px",
                    margin: "10px",
                  }}
                />

                <input
                  type="text"
                  placeholder="Email"
                  style={{
                    height: "30px",
                    width: "70%",
                    paddingLeft: "20px",
                    margin: "10px",
                  }}
                />

                <input
                  style={{
                    color: "black",
                    height: "30px",
                    width: "70%",
                    paddingLeft: "20px",
                    margin: "10px",
                  }}
                  type="password"
                  placeholder="Password"
                />

                <input
                  style={{
                    color: "black",
                    height: "30px",
                    width: "70%",
                    paddingLeft: "20px",
                    margin: "10px",
                  }}
                  type="text"
                  placeholder="Biography"
                />
                {/* <br /> */}
                <Button
                  style={{
                    width: "30%",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "#34384A",
                    color: "white",
                    border: "1px solid gray",
                    fontFamily: "poppins",
                    outline: "none",
                    cursor: "pointer",
                    // marginTop: "20px",
                  }}
                >
                  SIGN UP
              </Button>

                {/* <br /> */}
                <div style={{ display: "flex" }}>
                  Already Have an Account ?
                {/* <Link style={{ textDecoration: "none" }} to="/signup"> */}
                  <div
                    style={{
                      marginLeft: "10px",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    <div>login</div>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </motion.div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export default SignUp;
