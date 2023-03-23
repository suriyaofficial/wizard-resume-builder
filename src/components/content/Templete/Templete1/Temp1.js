import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Templete.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4} md={2}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              className="tab-Label"
              label="Personal Info"
              {...a11yProps(0)}
            />
            <Tab
              className="tab-Label"
              label="Work Experience"
              {...a11yProps(1)}
            />
            <Tab className="tab-Label" label="Education" {...a11yProps(2)} />
            <Tab className="tab-Label" label="Skills" {...a11yProps(3)} />
          </Tabs>
        </Grid>
        <Grid item xs={8} md={10}>
          <TabPanel value={value} index={0}>
            <Grid container spacing={1}>
              <Grid item xs={4} md={1}>
                <Stack direction="row" spacing={2}>
                  <Avatar src="/broken-image.jpg" />
                </Stack>
              </Grid>
              <Grid item xs={8} md={11}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="firstname"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="lastname"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="phonenumber"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="address" id="fullWidth" />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="city"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="state"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="pincode"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  fullWidth
                  maxRows={4}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={1} direction="row">
                  {/* <Button variant="outlined">Outlined</Button> */}
                  <Button variant="contained">next</Button>
                </Stack>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h1> Work Experience</h1>
            <h4>Experience 1</h4>
            <Divider variant="middle" />
            <Grid container spacing={1}>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="job title"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="organisation name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="start date"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="end date"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={1} direction="row">
                  <Button variant="outlined">back</Button>
                  <Button variant="contained">next</Button>
                </Stack>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h1> Education</h1>

            <Divider variant="middle" />
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="title"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="university"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="Degree"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="start date"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="end date"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={1} direction="row">
                  <Button variant="outlined">back</Button>
                  <Button variant="contained">next</Button>
                </Stack>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <h1> Skills</h1>

            <Divider variant="middle" />
            <Grid container spacing={1}>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="Skill 1"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="Skill 2"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="Skill 3"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  id="outlined-basic"
                  label="Skill 4"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={1} direction="row">
                  <Button variant="outlined">back</Button>
                  <Button variant="contained">next</Button>
                </Stack>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
}
