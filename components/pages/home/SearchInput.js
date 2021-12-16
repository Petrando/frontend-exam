import TextInput from "../../global/TextInput"
import styles from "../../../styles/components/pages/home/SearchInput.module.css"
import homeStyles from "../../../styles/components/pages/home/Home.module.css"

const SearchInput = ({searchText, setSearchText}) => {
  return (
    <div className={styles.container}>
      <h4>Search</h4>
      <TextInput searchText={searchText} setSearchText={setSearchText} />
    </div>
  )
}

export default SearchInput;