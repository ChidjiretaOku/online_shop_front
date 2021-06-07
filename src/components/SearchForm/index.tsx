/*

const SearchForm: React.FC  = () => {
    const text = useAppSelector(state => state.searchForm.First_Name);
    const dispatch = useAppDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [voted, setVoted] = useState(true);  // true значит ссылочки не будет

    function haveVoted() {
        fetchData('/api/articles/search/', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => {
                if(!response.ok) {
                    setVoted(true);  // опять-таки, если не авторизовался, то не будет ссылки
                }
                return response.json();
            })
            .then(data => {
                if(data.message == 'not voted' && voted) {
                    setVoted(false);
                }
                else if(data.message == 'voted') {setVoted(true);}
            })
    }

    function find(text: string) {
        history.push(`/api/articles/search/${text}`);
        dispatch(clearState());
    }

    useEffect(() => {haveVoted();}, [voted]);

    return (
        <div className={s.root}>
            <div className={s.icon}>
                <Icon icon={'moon'} intent={'warning'} iconSize={60}/>
            </div>
            <div className={s.icon3}>
                <Icon icon={'clean'} intent={'warning'} iconSize={70}/>
            </div>
            <div id={s.mainy}>
                <div className={s.left}>
                    <div className={s.form}>
                        <ThemeProvider theme={theme}>
                            <TextField
                                variant={'outlined'}
                                margin={'normal'}
                                color={'primary'}
                                required
                                fullWidth
                                id={'fname'}
                                label={"First name..."}
                                name={'First_Name'}
                                value={First_Name}
                                onChange={(event) => dispatch(changeFirst(event.target.value))}
                            />
                            <TextField
                                variant={'outlined'}
                                margin={'normal'}
                                required
                                fullWidth
                                id={'mname'}
                                label={"Middle name..."}
                                name={'Middle_Name'}
                                value={Middle_Name}
                                onChange={(event) => dispatch(changeMiddle(event.target.value))}
                            />
                            <TextField
                                variant={'outlined'}
                                margin={'normal'}
                                required
                                fullWidth
                                id={'lname'}
                                label={"Last name..."}
                                name={'Last_Name'}
                                value={Last_Name}
                                onChange={(event) => dispatch(changeLast(event.target.value))}
                            />
                        </ThemeProvider>
                        <Button disabled={!(Last_Name && First_Name && Middle_Name)}
                                icon="search" intent={'warning'}
                                className={classes.submit} text="Искать"
                                onClick={() => {
                                    findPerson(First_Name, Middle_Name, Last_Name);
                                }}
                        /></div>
                    {!voted ? <p className={s.p_2}>Also: wanna<Link className={s.link} to={Routes.VOTE}>
                            vote
                        </Link>?</p> :
                        <p className={s.p_1}>XOXO</p>}
                </div>
                <div className={s.right}>
                    <p className={s.p}>Enter full name here</p>
                    <img className={s.img} src={'arrow.png'} alt={'arrow image'}/>
                </div>
            </div>
            <div className={s.icon2}>
                <Icon icon={'clean'} intent={'warning'} iconSize={60}/>
            </div>
        </div>
    )
}

export default SearchForm;

 */