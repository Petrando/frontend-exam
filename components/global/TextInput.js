import { useStyles} from '../../styles/components/global/TextInput.module.js';

export const TextInput = ({searchText, setSearchText}) => {
  const classes = useStyles();

  return (
    <input type='text' placeholder='Keyword' className={classes.input} 
      value={searchText}
      onChange={(e)=>{setSearchText(e.target.value)}}
    >
    </input>
  );
}