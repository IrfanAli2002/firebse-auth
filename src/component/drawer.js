import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import '../App.css'

const drawerWidth = 180;

export default function PermanentDrawerLeft() {

  const renderData = [
    {
        id: 6,
        title: 'USER',
        path: '/user',
    },
    {
        id: 2,
         title: 'POSTS',
         path: '/post',
        },
        {
            id: 3,
            title: 'ALBUMS',
            path: '/pic',
        },
        {
            id: 4,
            title: 'TODOS',
            path: '/todo',
        },
        {
            id: 1,
            title: 'COMMENTS',
            path: '/comment',
        },

]


const Navigate = useNavigate();
  


  return (
    <Box   >
      <Drawer
        className='Drawer'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <h1>Dashboard</h1>
        <List  >
          <ListItemButton
          className='dflex ' >
        {
          renderData.map(item =>(
            <ListItem
            className='btn'
            key ={item.id}
            button
                onClick={() => Navigate(item.path) }
                >
                  <ListItemText>{item.title} </ListItemText>

                </ListItem>
                  
              ))
            }
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
