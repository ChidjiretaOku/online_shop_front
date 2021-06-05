import React from 'react';
import {fade, makeStyles, Theme, createStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {drawerToggle, menuToggle, mobileMenuToggle, categoriesToggle} from './@slice';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {useHistory} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore, Favorite, FreeBreakfast, MenuOpen, Spa} from "@material-ui/icons";
import Routes from "../../pages/routes";
import CategoryList from "../CategoryList";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);


export default function NavigationSearchBar() {
    const classes = useStyles();
    const dispatch = useAppDispatch()
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const history = useHistory();

    const isMenuOpen = useAppSelector(state => state.NavBar.isMenuOpen);
    const isCategoriesOpen = useAppSelector(state => state.NavBar.isCategoriesOpen);
    const isDrawerOpen = useAppSelector(state => state.NavBar.isDrawerOpen);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        dispatch(menuToggle());
    };

    const handleCategoriesClick = () => {
        dispatch(categoriesToggle());
    }

    const renderPanelMenu = (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={isDrawerOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => dispatch(drawerToggle())}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </div>
            <Divider/>
            <List>
                <ListItem button onClick={() => history.push(Routes.ROOT)}>
                    <ListItemIcon><FreeBreakfast/></ListItemIcon>
                    <ListItemText primary={"Каталог"}/>
                </ListItem>
                <ListItem button onClick={handleCategoriesClick}>
                    <ListItemIcon><MenuOpen/></ListItemIcon>
                    <ListItemText primary={"Категории"}/>
                    {isCategoriesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={isCategoriesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <CategoryList/>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={() => history.push(Routes.FAVORITE)}>
                    <ListItemIcon><Favorite/></ListItemIcon>
                    <ListItemText primary={"Избранное"}/>
                </ListItem>
            </List>
        </Drawer>
    );

    const renderIfLogged = (
        <div>
            <MenuItem onClick={() => history.push(Routes.LOGIN)}>Login</MenuItem>
            <MenuItem onClick={() => history.push(Routes.LOGIN)}>Register</MenuItem>
        </div>
    )

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
        >
            <MenuItem onClick={() => dispatch(menuToggle())}>Profile</MenuItem>

        </Menu>
    );

    // const mobileMenuId = 'primary-search-account-menu-mobile';
    // const renderMobileMenu = (
    //     <Menu
    //         anchorEl={mobileMoreAnchorEl}
    //         anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    //         id={mobileMenuId}
    //         keepMounted
    //         transformOrigin={{vertical: 'top', horizontal: 'right'}}
    //         open={isMobileMenuOpen}
    //         onClose={handleMobileMenuClose}
    //     >
    //         <MenuItem>
    //             <IconButton aria-label="show 4 new mails" color="inherit">
    //                 <Badge badgeContent={4} color="secondary">
    //                     <MailIcon/>
    //                 </Badge>
    //             </IconButton>
    //             <p>Messages</p>
    //         </MenuItem>
    //         <MenuItem>
    //             <IconButton aria-label="show 11 new notifications" color="inherit">
    //                 <Badge badgeContent={11} color="secondary">
    //                     <NotificationsIcon/>
    //                 </Badge>
    //             </IconButton>
    //             <p>Notifications</p>
    //         </MenuItem>
    //         <MenuItem onClick={handleProfileMenuOpen}>
    //             <IconButton
    //                 aria-label="account of current user"
    //                 aria-controls="primary-search-account-menu"
    //                 aria-haspopup="true"
    //                 color="inherit"
    //             >
    //                 <AccountCircle/>
    //             </IconButton>
    //             <p>Order</p>
    //         </MenuItem>
    //     </Menu>
    // );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => dispatch(drawerToggle())}

                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Чаеголовый
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Поиск…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div >
                        <IconButton color="inherit"
                                    onClick={() => history.push(Routes.CART)}>
                            <ShoppingCartIcon/>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
            {renderPanelMenu}
        </div>
    );
}
