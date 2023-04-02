import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';


const styles = {
    skyblue: {
      
      color: '#6fa6fb',
      },
      purple: {
        
        color: '#8d91d6',
        },
        pink: {
          color: '#e1a5d5',
          },
          
          lightblue: {
            color: '#9fc9fc',
            },

            footerGasp: {
              border:"pink solid 8px"
            },

  };


const Footer = () => {

const [value, setValue] = React.useState('recents');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);

};

return (
    <>
    <div className='footerDiv'>
  <BottomNavigation sx={{ 
      width: 500, 
      background:"none",
      height: '2rem',
      transform: "translate(60%,0)",
    }} 
      value={value} onChange={handleChange}>
      <BottomNavigationAction 
        label="Github"
        value="github"
        href="https://github.com/"
        icon={<GitHubIcon />}
        style={styles.lightblue}
      />
      
      <BottomNavigationAction
        color="secondary"
        label="LinkedIn"
        value="linkedin"
        href="https://www.linkedin.com/"
        icon={<LinkedInIcon />}
        style={styles.skyblue}
      />
      <BottomNavigationAction
        label="Twitter"
        value="twitter"
        href="https://twitter.com/"
        icon={<TwitterIcon />}
        style={styles.purple}
      />
      
      
      <BottomNavigationAction 
      label="Youtube" 
      value="youtube" 
      href="https://youtube.com/"
      icon={<YouTubeIcon />} 
      style={styles.pink}
      />
      
    </BottomNavigation>

    <Typography className='footerGasp'>
    GASP 2023 © 
    </Typography>
  
    </div>
  </>
  );
}

export default Footer;