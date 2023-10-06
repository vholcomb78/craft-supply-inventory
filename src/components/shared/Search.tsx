/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

const searchCss = css`
  position: relative;
  border-radius: 3px;
  background-color: white;
  &:hover: {
    background-color: fade(#eee, 0.25);
  }
  width: 40%;
`

const searchIconCss = css`
  padding: 5px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items; center;
  justify-content: center;
  color: #6D6875;
`

const inputCss = css`
  padding: 1px;
  padding-left: 30px;
  width: 100%;

`

const Search = () => {
  return (
    <div css={searchCss}>
      <div css={searchIconCss}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        css={inputCss}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

export default Search
