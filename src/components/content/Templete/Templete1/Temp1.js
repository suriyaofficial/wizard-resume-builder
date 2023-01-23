import * as React from 'react';
import  { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon  from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';





import './Templete.css'



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
        <Box sx={{ p: 5 }}>
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 300 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',p:0,mt:5 }}
      >
        <Tab label="personal information" {...a11yProps(0)} />
        <Tab label="education" {...a11yProps(1)} />
        <Tab label="work experience" {...a11yProps(2)} />
        <Tab label="skills" {...a11yProps(3)} />
        
      </Tabs>



      <TabPanel value={value} index={0}>
        <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper',  width: 900 ,border: 1, borderColor: 'divider',m:5,p:2}}>
          <form className='form' >
            <Avatar
              alt="Remy Sharp"
              src={"r"}
              sx={{ width: 56, height: 56 }}
            />
            <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">Upload<input hidden accept="image/*"  type="file"  /></Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </Stack>
          <TextField sx={{marginLeft:"auto"}} className='form-input fname' id="outlined-basic" label="First Name" variant="outlined" />
          <TextField sx={{marginLeft:"auto"}} className='form-input sname' id="outlined-basic" label="Second Name" variant="outlined" />
          <TextField className='form-input' id="outlined-basic" label="Email" variant="outlined" />
          <TextField className='form-input' id="outlined-basic" label="Phonenumber" variant="outlined" />
          <TextField className='form-input' id="outlined-basic" label="Address" variant="outlined" />
          <TextField className='form-input' id="outlined-basic" label="City" variant="outlined" />
          <TextField className='form-input' id="outlined-basic" label="State" variant="outlined" />
          <TextField className='form-input' id="outlined-basic" label="Pincode" variant="outlined" />
          <TextField className='form-input' id="outlined-basic" label="Objective" variant="outlined" />
          <Button variant="outlined">back</Button>
          <Button variant="contained"  >next</Button>
          </form>
        
        </Box>
      </TabPanel>


      <TabPanel value={value} index={1}>
         <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper',  width: 900 ,border: 1, borderColor: 'divider',m:5,p:2}}>
          <form className='form' >
           <h1>work exp</h1>
            
          <TextField  className='form-input'  id="outlined-basic" label="job title" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="organaization Name" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="start date" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="end date" variant="outlined" />
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>add new</Button>
          <Button variant="outlined">back</Button>
          <Button variant="contained"  >next</Button>
          </form>
        
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper',  width: 900 ,border: 1, borderColor: 'divider',m:5,p:2}}>
          <form className='form' >
           <h1>education</h1>
            
          <TextField  className='form-input'  id="outlined-basic" label="Degree" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="university Name" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="start date" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="end date" variant="outlined" />
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>add new</Button>
         
         
          <Button variant="outlined">back</Button>
          <Button variant="contained"  >next</Button>

          </form>
        
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper',  width: 900 ,border: 1, borderColor: 'divider',m:5,p:2}}>
          <form className='form' >
           <h1>skills</h1>
            
          <TextField  className='form-input'  id="outlined-basic" label="skills" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="skills" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="skills" variant="outlined" />
          <TextField  className='form-input'  id="outlined-basic" label="skills" variant="outlined" />
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>add new</Button>
         
         
          <Button variant="outlined">back</Button>
          <Button variant="contained"  >preview</Button>

          </form>
        
        </Box>
      </TabPanel>
      
    </Box>
  );
}
