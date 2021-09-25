import React from 'react'
import {makeStyles,InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const useStyle=makeStyles((theme)=>({
    search: {
        borderRadius:2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display:'flex',
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color:'blue'
      },
      inputRoot: {
        fontSize:'unset',
        width:'100%',
      },
      inputInput: {
        paddingLeft:20,
      }})
)
export default function SearchBar() {
    const classes=useStyle();
    return (
            <div className={classes.search}>
                <InputBase
                placeholder="Search for product ,brands and more"
                 classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                 }}
                 inputProps={{ 'aria-label': 'search' }}
                />
                 <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>  
          </div>
    )
}
