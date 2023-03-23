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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email("pls enter valid email").required("enter email"),
  phoneNo: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  pincode: yup.string().required(),
  objective: yup.string().required(),
  jobTitle: yup.string().required(),
  orgName: yup.string().required(),
  jobStartDt: yup.number().integer().positive().required(),
  jobEndDt: yup.number().integer().positive().required(),
  eduTitle: yup.string().required(),
  university: yup.string().required(),
  degree: yup.string().required(),
  eduStartDt: yup.number().integer().positive().required(),
  eduEndDt: yup.number().integer().positive().required(),
  skill1: yup.string().required(),
  skill2: yup.string().required(),
  skill3: yup.string().required(),
  skill4: yup.string().required(),
});

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = data => console.log(data);
  const next = (event, newValue) => {
    setValue(value + 1);
  };
  const back = (event, newValue) => {
    setValue(value - 1);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
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
                    {...register("firstName")}
                    id="outlined-basic"
                    label="firstname"
                    variant="outlined"
                  />
                  <p>{errors.firstName?.message}</p>
                </Grid>

                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("lastName")}
                    id="outlined-basic"
                    label="lastname"
                    variant="outlined"
                  />
                  <p>{errors.lastName?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("email")}
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                  />
                  <p>{errors.email?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("phoneNo")}
                    id="outlined-basic"
                    label="phonenumber"
                    variant="outlined"
                  />
                  <p>{errors.phoneNo?.message}</p>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    {...register("address")}
                    fullWidth
                    label="address"
                    id="fullWidth"
                  />
                  <p>{errors.address?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("city")}
                    id="outlined-basic"
                    label="city"
                    variant="outlined"
                  />
                  <p>{errors.city?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("state")}
                    id="outlined-basic"
                    label="state"
                    variant="outlined"
                  />
                  <p>{errors.state?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("pincode")}
                    id="outlined-basic"
                    label="pincode"
                    variant="outlined"
                  />
                  <p>{errors.pincode?.message}</p>
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    {...register("objective")}
                    id="outlined-multiline-flexible"
                    label="objective"
                    multiline
                    fullWidth
                    maxRows={4}
                  />
                  <p>{errors.objective?.message}</p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={1} direction="row">
                    {/* <Button variant="outlined">Outlined</Button> */}
                    <Button variant="contained" onClick={next}>next</Button>
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
                    {...register("jobTitle")}
                    id="outlined-basic"
                    label="job title"
                    variant="outlined"
                  />
                  <p>{errors.jobTitle?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("orgName")}
                    id="outlined-basic"
                    label="organisation name"
                    variant="outlined"
                  />
                  <p>{errors.orgName?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("jobStartDt")}
                    id="outlined-basic"
                    label="start date"
                    variant="outlined"
                  />
                  <p>{errors.jobStartDt?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("jobEndDt")}
                    id="outlined-basic"
                    label="end date"
                    variant="outlined"
                  />
                  <p>{errors.jobEndDt?.message}</p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={1} direction="row">
                    <Button variant="outlined" onClick={back}>back</Button>
                    <Button variant="contained" onClick={next}>next</Button>
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
                    {...register("eduTitle")}
                    id="outlined-basic"
                    label="title"
                    variant="outlined"
                  />
                  <p>{errors.eduTitle?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("university")}
                    id="outlined-basic"
                    label="university"
                    variant="outlined"
                  />
                  <p>{errors.university?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("degree")}
                    id="outlined-basic"
                    label="Degree"
                    variant="outlined"
                  />
                  <p>{errors.degree?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("eduStartDt")}
                    id="outlined-basic"
                    label="start date"
                    variant="outlined"
                  />
                  <p>{errors.eduStartDt?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("eduEndDt")}
                    id="outlined-basic"
                    label="end date"
                    variant="outlined"
                  />
                  <p>{errors.eduEndDt?.message}</p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={1} direction="row">
                    <Button variant="outlined" onClick={back}>back</Button>
                    <Button variant="contained" onClick={next}>next</Button>
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
                    {...register("skill1")}
                    id="outlined-basic"
                    label="Skill 1"
                    variant="outlined"
                  />
                  <p>{errors.skill1?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("skill2")}
                    id="outlined-basic"
                    label="Skill 2"
                    variant="outlined"
                  />
                  <p>{errors.skill2?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("skill3")}
                    id="outlined-basic"
                    label="Skill 3"
                    variant="outlined"
                  />
                  <p>{errors.skill3?.message}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextField
                    {...register("skill4")}
                    id="outlined-basic"
                    label="Skill 4"
                    variant="outlined"
                  />
                  <p>{errors.skill4?.message}</p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={1} direction="row">
                    <Button variant="outlined" onClick={next}>back</Button>
                    {/* <Button type="submit" id="submit"
                    label="submit" variant="contained" onClick={handleSubmit}>submit</Button> */}
                    <input type="submit" disabled={!isValid} />
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
