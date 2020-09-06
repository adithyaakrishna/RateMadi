import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import FolderIcon from "@material-ui/icons/Folder";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "../BottomNavbar/bottomnavbar.min.scss";
const useStyles = makeStyles({
  root: {
    width: 500,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    paddingBottom: "50px",
  },
});

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className="bottomview">
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<HomeIcon />}
            as={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Settings"
            value="Settings"
            icon={<SettingsIcon />}
            as={Link}
            to="/FormPage"
          />
          <BottomNavigationAction
            label="Profile"
            value="Profile"
            icon={<VerifiedUserIcon />}
          />
          {/* <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        /> */}
        </BottomNavigation>
      </div>
    </section>
  );
}
