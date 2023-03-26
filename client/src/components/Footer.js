import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Github"
        value="github"
        href="https://github.com/"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        value="linkedin"
        href="https://www.linkedin.com/"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        label="Twitter"
        value="twitter"
        href="https://twitter.com/"
        icon={<TwitterIcon />}
      />
      <BottomNavigationAction 
      label="Youtube" 
      value="youtube" 
      href="https://youtube.com/"
      icon={<YouTubeIcon />} />
    </BottomNavigation>
  );
}
