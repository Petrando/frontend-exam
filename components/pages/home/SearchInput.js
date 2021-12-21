import {Box} from '@mui/material'
import TextInput from "../../global/TextInput"
import styles from "../../../styles/components/pages/home/SearchInput.module.css"

const SearchInput = ({searchText, setSearchText}) => {
  return (
    <Box className={styles.container}>
      <h4>Search</h4>
      <TextInput searchText={searchText} setSearchText={setSearchText} />
    </Box>
  )
}

export default SearchInput;