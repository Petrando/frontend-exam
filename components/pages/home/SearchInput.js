import {Box} from '@mui/material'
import TextInput from "../../global/TextInput"
import styles from "../../../styles/components/pages/home/SearchInput.module.css"
import {useStyles} from "../../../styles/components/pages/home/SearchInput.module"

const SearchInput = ({searchText, setSearchText}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      
      <h4 className={classes.sectionTitle}>Search</h4>
      <TextInput searchText={searchText} setSearchText={setSearchText} />
    </Box>
  )
}

export default SearchInput;