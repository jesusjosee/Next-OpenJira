import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  return (
    <Drawer
        anchor="left"
        open={false}
        onClose={ () => console.log('cerrando') }
    >
        <Box width={250} >
            <Box sx={{ padding: '5px 10px' }} >
                <Typography variant="h4" > Menú </Typography>
            </Box>

            <List>
                {
                    menuItems.map( (text, index) => (
                        <ListItem key={text} >
                            <ListItemIcon>
                                { index % 2 ? <AcUnitOutlinedIcon></AcUnitOutlinedIcon> : <EmailOutlinedIcon></EmailOutlinedIcon> }
                            </ListItemIcon>
                            <ListItemText primary={ text } />
                        </ListItem>
                    ) )
                }
            </List>

            <Divider/>

            <List>
                {
                    menuItems.map( (text, index) => (
                        <ListItem key={text} >
                            <ListItemIcon>
                                { index % 2 ? <AcUnitOutlinedIcon></AcUnitOutlinedIcon> : <EmailOutlinedIcon></EmailOutlinedIcon> }
                            </ListItemIcon>
                            <ListItemText primary={ text } />
                        </ListItem>
                    ) )
                }
            </List>
        </Box>
    </Drawer>
  )
}
