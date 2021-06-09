import React, {useEffect} from 'react';
import {fade, makeStyles, Theme, createStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {drawerToggle, menuToggle, categoriesToggle, checkLog, changeSearch} from './@slice';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {useHistory} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore, Favorite, FreeBreakfast, MenuOpen} from "@material-ui/icons";
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
    const isLogged = useAppSelector(state => state.NavBar.isLogged);
    const search = useAppSelector(state => state.NavBar.searchWord);
    const visibility = isLogged ? "visible" : "hidden";

    useEffect(() => {
        dispatch(checkLog());
    }, [isMenuOpen]);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        dispatch(menuToggle());
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            history.push(Routes.SEARCH)
        }
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        dispatch(menuToggle());
    };

    const handleCategoriesClick = () => {
        dispatch(categoriesToggle());
    };

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
                <ListItem button onClick={() => {
                    history.push(Routes.ROOT);
                    dispatch(drawerToggle());
                }}>
                    <ListItemIcon><FreeBreakfast/></ListItemIcon>
                    <ListItemText primary={"Каталог"}/>
                </ListItem>
                <ListItem button onClick={handleCategoriesClick}>
                    <ListItemIcon><MenuOpen/></ListItemIcon>
                    <ListItemText primary={"Категории"}/>
                    {isCategoriesOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={isCategoriesOpen} timeout="auto" unmountOnExit>
                    <CategoryList/>
                </Collapse>
                <ListItem button
                          style={{visibility: visibility}}
                          onClick={() => {
                              history.push(Routes.FAVORITE)
                              dispatch(drawerToggle())
                          }}>
                    <ListItemIcon><Favorite/></ListItemIcon>
                    <ListItemText primary={"Избранное"}/>
                </ListItem>
            </List>
        </Drawer>
    );

    const renderIfLogged = (isLogged: boolean) => {
        if (!isLogged) {
            return (
                <>
                    <MenuItem onClick={() => {
                        history.push(Routes.LOGIN);
                        handleMenuClose();
                    }}>Login</MenuItem>
                    <MenuItem onClick={() => {
                        history.push(Routes.REGISTER);
                        handleMenuClose();
                    }}>Register</MenuItem>
                </>)
        } else {
            return (
                <MenuItem onClick=
                              {() => {
                                  history.push(Routes.PROFILE);
                                  handleMenuClose();
                              }
                              }>Profile</MenuItem>
            )
        }
    }


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
            {renderIfLogged(isLogged)}
        </Menu>
    );

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
                            value={search}
                            onChange={(event) => {
                                dispatch(changeSearch(event.target.value))
                            }
                            }
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div>
                        <IconButton color="inherit"
                                    style={{visibility: visibility}}
                                    onClick={() => {
                                        history.push(Routes.CART)
                                    }}>
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
