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
import { useNavigate } from "react-router-dom";
import {fieldCd, skinCodes}  from './typeCodes';
import{Link} from 'react-router-dom';
import './Templete.css';
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

export default function VerticalTabs(props) {
  let history = useNavigate();
  const [value, setValue] = useState(0);
  const [data,setData]= useState(props.dataSection);
  const onchange=(event)=>{
    var key =event.target.name;
    var val =event.target.value;
    // this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
    setData({...data,[key]:val})
}
const getFieldData=(key)=>{
  if(data && data[key]){
    return data[key]
  }
  return "";
}
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push();
  };
  const next = (event,newValue) => {
    setValue(value+1);
    history.push();
  };
  const back = (event,newValue) => {
    setValue(value-1);
    history.push();
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
          <TextField id="outlined-basic" label="First Name" variant="outlined" type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={onchange}/>
          <TextField id="outlined-basic" label="Second Name" variant="outlined" type="text" name={fieldCd.LastName} value={getFieldData(fieldCd.LastName)}  onChange={onchange}/>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="text" name={fieldCd.Email} value={getFieldData(fieldCd.Email)}  onChange={onchange} />
          <TextField id="outlined-basic" label="Phonenumber" variant="outlined"  type="text" name={fieldCd.Phone} value={getFieldData(fieldCd.Phone)}  onChange={onchange}/>
          <TextField id="outlined-basic" label="Address" variant="outlined" type="text" name={fieldCd.Address} value={getFieldData(fieldCd.Address)}  onChange={onchange} />
          <TextField id="outlined-basic" label="City" variant="outlined"  type="text" name={fieldCd.City} value={getFieldData(fieldCd.City)}  onChange={onchange}/>
          <TextField id="outlined-basic" label="State" variant="outlined"  type="text" name={fieldCd.State} value={getFieldData(fieldCd.State)}  onChange={onchange}/>
          <TextField id="outlined-basic" label="Pincode" variant="outlined"  type="text" name={fieldCd.PinCode} value={getFieldData(fieldCd.PinCode)}  onChange={onchange}/>
          <TextField id="outlined-basic" label="Objective" variant="outlined" type="text" name={fieldCd.Objective} value={getFieldData(fieldCd.Objective)}  onChange={onchange} />
          <Button variant="contained" onClick={next} >next</Button>
          </form>
        
        </Box>
      </TabPanel>


      <TabPanel value={value} index={1}>
         <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper',  width: 900 ,border: 1, borderColor: 'divider',m:5,p:2}}>
          <form className='form' >
           <h1>work exp</h1>
            
          <TextField  className='form-input'  id="outlined-basic" label="job title" variant="outlined"  type="text" name={fieldCd.JobTitle} value={getFieldData(fieldCd.JobTitle)}  onChange={onchange}/>
          <TextField  className='form-input'  id="outlined-basic" label="organaization Name" variant="outlined" type="text" name={fieldCd.OrganaizationName} value={getFieldData(fieldCd.OrganaizationName)}  onChange={onchange} />
          <TextField  className='form-input'  id="outlined-basic" label="start date" variant="outlined" type="text" name={fieldCd.StartDateJ1} value={getFieldData(fieldCd.StartDateJ1)}  onChange={onchange} />
          <TextField  className='form-input'  id="outlined-basic" label="end date" variant="outlined" type="text" name={fieldCd.EndDateJ1} value={getFieldData(fieldCd.EndDateJ1)}  onChange={onchange} />
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>add new</Button>
          <Button variant="outlined"onClick={back}>back</Button>
          <Button variant="contained" onClick={next} >next</Button>
          </form>
        
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper',  width: 900 ,border: 1, borderColor: 'divider',m:5,p:2}}>
          <form className='form' >
           <h1>education</h1>
            
          <TextField  className='form-input'  id="outlined-basic" label="Degree" variant="outlined" type="text" name={fieldCd.Degree} value={getFieldData(fieldCd.Degree)}  onChange={onchange} />
          <TextField  className='form-input'  id="outlined-basic" label="university Name" variant="outlined" type="text" name={fieldCd.UniversityName} value={getFieldData(fieldCd.UniversityName)}  onChange={onchange} />
          <TextField  className='form-input'  id="outlined-basic" label="start date" variant="outlined" type="text" name={fieldCd.StartDateE1} value={getFieldData(fieldCd.StartDateE1)}  onChange={onchange}  />
          <TextField  className='form-input'  id="outlined-basic" label="end date" variant="outlined" type="text" name={fieldCd.EndDateE1} value={getFieldData(fieldCd.EndDateE1)}  onChange={onchange}  />
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>add new</Button>
         
         
          <Button variant="outlined"onClick={back}>back</Button>
          <Button variant="contained" onClick={next} >next</Button>

          </form>
        
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper',  width: 900 ,border: 1, borderColor: 'divider',m:5,p:2}}>
          <form className='form' >
           <h1>skills</h1>
            
          <TextField  className='form-input'  id="outlined-basic" label="skills" variant="outlined"type="text" name={fieldCd.Skill1} value={getFieldData(fieldCd.Skill1)}  onChange={onchange}  />
          <TextField  className='form-input'  id="outlined-basic" label="skills" variant="outlined"type="text" name={fieldCd.Skill2} value={getFieldData(fieldCd.Skill2)}  onChange={onchange}  />
          <TextField  className='form-input'  id="outlined-basic" label="skills" variant="outlined"type="text" name={fieldCd.Skill3} value={getFieldData(fieldCd.Skill3)}  onChange={onchange}  />
          <TextField  className='form-input'  id="outlined-basic" label="skills" variant="outlined" type="text" name={fieldCd.Skill4} value={getFieldData(fieldCd.Skill4)}  onChange={onchange} />
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>add new</Button>
         
         
          <Button variant="outlined"onClick={back}>back</Button>
          <Link to="resumePreview">
          <Button variant="contained"  >preview</Button>
            </Link>
          

          </form>
        
        </Box>
      </TabPanel>
      
    </Box>
  );
}
