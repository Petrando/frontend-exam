import styles from "../../styles/components/global/TextInput.module.css"

const TextInput = ({label, inputId, searchText, setSearchText}) => {
  return (
    <input type="text" placeholder="Keyword" className={styles.input} id={inputId}
      value={searchText}
      onChange={(e)=>{setSearchText(e.target.value)}}
    >
    </input>
  )
}

export default TextInput;