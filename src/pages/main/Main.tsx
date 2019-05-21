import * as React from 'react'
import { inject, observer } from 'mobx-react';
import { RoutingStore } from '../../components/RoutingStore';
import { LeftSideMenu } from '../admissions/LeftSideMenu';
import { Previews } from '../admissions/Previews';
import { RightSide } from '../admissions/RightSide';
import { MainPreviews } from './MainPreviews';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import FolderIcon from '@material-ui/icons/Folder';




 {/* <Previews /> */}
                {/* <LeftSideMenuBar /> */}
                {/* <News /> */}
                {/* <Events/> */}

@inject('store')
@observer
export class Main extends React.Component<{store? : RoutingStore},{}>{

  style = {
    overflow: 'auto'
  }
    render(){
        return (
            <div className='w-full h-full'>
              <div className='flex'>
                <div className='h-64 w-2/3 rounded m-auto bg-grey text-white p-6 mb-20'>
                  <p>Dummy picture</p>
                </div>
                <div className='bg-grey h-64 flex-grow p-6 mb-20 rounded ml-3 overflow-auto'>
                <h2>Events</h2>
                  <List component="nav">
                    <ListItem button>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dummy event #1" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dummy event #2" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dummy event #3" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dummy event #4" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dummy event #5" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dummy event #6" />
                    </ListItem>
                  </List>
                </div>
              </div>
              <MainPreviews />
              <RightSide />
                
            </div>
        )
    }
}