import { useDispatch } from "react-redux"
import { doChangeFilter } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = event => {
        dispatch(doChangeFilter(event.target.value))
    }

    const style = {
        marginBottom: 10
    }

  return (
    <div style={style}>
      Filer: <input name="filter" onChange={handleChange} />
    </div>
  )
}

export default Filter