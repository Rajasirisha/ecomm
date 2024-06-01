import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function LabelBottomNavigation() {
  const [value] = React.useState('recents');

  return (
    <BottomNavigation showLabels sx={{ width: '100%', height: '200px', backgroundColor: '#123557', color: '#FFFFFF', alignItems: 'center', justifyContent: 'space-between' }} value={value}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div  style={{ paddingRight: '150px', paddingTop: '20px' }}>
        <BottomNavigationAction
          value="bottomlogo"
          icon={<img  
          style={{ width: '200px', height: '40px', marginLeft: '200px' }} 
          src="./images/bottomlogo.png" 
          alt="logo" 
        />}
        />
        <div style={{ display: 'flex', alignItems: 'center', color: '#FFFFFF', fontSize: '14px', marginLeft: '90px', paddingTop: '10px', fontWeight: '300'  }}>
          © R Singhania
        </div>
      </div>
      

  <div>
    <div style={{ paddingRight: '50px' }}>
      <div style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 'bold'}}>Company</div>
      <ul style={{ listStyleType: 'none', padding: 0 , fontWeight: '300'}}>
        <li>About</li>
        <li>FAQ</li>
      </ul>
    </div>
  </div>

  <div>
    <div style={{ paddingRight: '50px' }}>
      <div style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 'bold' }}>Terms</div>
      <ul style={{ listStyleType: 'none', padding: 0 , fontWeight: '300'}}>
        <li>Data privacy</li>
        <li>Terms</li>
        <li>Accessibility</li>
      </ul>
    </div>
  </div>

  <div>
    <div>
      <div style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 'bold' }}>Related</div>
      <ul style={{ listStyleType: 'none', padding: 0 , fontWeight: '300'}}>
        <li>Find Buyer</li>
        <li>Feedback</li>
      </ul>
    </div>
  </div>
</div>

      <div>
        <BottomNavigationAction
          value="linkedin"
          icon={<img  
              style={{ width: '40px', height: '40px' }} 
              src="./images/LinkedIn.png" 
              alt="logo" 
            />}
        />
        <BottomNavigationAction
          value="twitter"
          icon={<img  
              style={{ width: '40px', height: '40px' }} 
              src="./images/Twitter.png" 
              alt="logo" 
            />}
        />
        <BottomNavigationAction 
        value="facebook" 
        icon={<img  
          style={{ width: '40px', height: '40px' }} 
          src="./images/Facebook.png" 
          alt="logo" 
        />} />
        <BottomNavigationAction 
        value="instagram" 
        icon={<img  
          style={{ width: '40px', height: '40px' , marginRight: '100px'}} 
          src="./images/Instagram.png" 
          alt="logo" 
        />} />
      </div>
    </BottomNavigation>
  );
}
