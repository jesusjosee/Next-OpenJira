import { AppBar, IconButton, Toolbar } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { green } from "@mui/material/colors";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0} >
        <Toolbar>
            <IconButton 
                size="large"
                edge="start"
            >
                <MenuOutlinedIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
