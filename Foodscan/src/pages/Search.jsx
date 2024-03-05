import { IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import "./../assets/style/myStyle.css";
function Search() {
  return (
        <div className="main-container front ">
        <div className="sb-search">
    <IconButton>
      <SearchIcon className="icon" />
    </IconButton>
    <input
      type="text"
      className="Search-box "
      placeholder="Search..."
    />
  </div>
        </div>
  )
}

export default Search