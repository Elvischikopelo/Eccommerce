import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useHistory } from 'react-router-dom';

export default function NavigationBar() {
  const [value, setValue] = React.useState(0);
  const [toggle,setToggle] = useState(false)


    const history = useHistory()

    useEffect(() => {
      if(value === 0) history.push('/')
      else if(value === 1) history.push('/movies')
      else if(value === 2) history.push('/series')
      else if(value === 3) history.push('/search')
    })

  return (
        <div className='flex flex-row justify-between pt-5'>
            <div className='flex-row flex justify-between'>
              <span className='font-bold text-4xl capitalize'>ABOUT US</span>
              <span className='font-bold text-4xl capitalize'>EDITORS LETTRES</span>
              <span className='font-bold text-4xl capitalize'>BECOME CONTRIBUTORS</span>
              <span className='font-bold text-4xl capitalize'>CONTACT US</span>
              <span className='font-bold text-4xl capitalize'>SUBSCRIBE</span>
            </div>

            <div className='flex-row flex justify-between'>
               <div className='flex-row flex justify-between' >
                <div className='h-4 w-2 b-white'></div>
                    <MovieIcon/>
                  <LiveTvIcon/>
                  <LiveTvIcon/>
                 <div className='h-4 w-2 b-white'></div>
                </div>

                <div>
                  {
                    toggle ? <input type='text' width='300px' height='6' /> :   
                  <SearchIcon onclick={setToggle()}/>

                  }
                </div>
            </div>
          
        </div>
  );
}