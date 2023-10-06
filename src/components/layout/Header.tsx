
/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Search } from '../shared'

const headerCss = css`
  width: 100%;

  header {
    background-color: #E5989B;
  }

  ul {
    list-style: none;
    padding-right: 20px;
  }

  li {
    display: inline-block;
    padding: 10px 20px;

    &.active,
    &:hover {
      background-color: #ffb4a2;
      border-radius: 3px;
      cursor: pointer;

      a {
        color: black;
      }
    }

    a {
      color: #333;
      text-decoration: none;
    }
  }
`

// type HeaderProps = {
//   path: string
// }

// TODO mobile vs desktop view
export const Header = () => {
  const { pathname } = useLocation()

  // return (
  //   <div css={headerCss}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <Tabs aria-label="tabs router example" value={window.location.pathname}>
  //   +       <Tab label="Inbox" value="/">
  //             <Link to="/">Home</Link>
  //           </Tab>
  //   +       <Tab label="Drafts" value="/wishlist">
  //             <Link to="/wishlist">Wish List</Link>
  //           </Tab>
  //   +       <Tab label="Trash" value="/shoppinglist" />
  //   +      </Tabs>
  //         <Search />
  //       </Toolbar>
  //     </AppBar>
  //   </div>
  // )

  return (
    <div css={headerCss}>
      <AppBar position="static">
        <Toolbar>
          <nav>
            <ul>
              <li className={pathname === '/' ? 'active' : ''}>
                <Link to="/">Home</Link>
              </li>
              <li className={pathname === '/wishlist' ? 'active' : ''}>
                <Link to="/wishlist">Wish List</Link>
              </li>
              <li className={pathname === '/shoppingList' ? 'active' : ''}>
                <Link to="/shoppingList">Shopping List</Link>
              </li>
            </ul>
          </nav>
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  )


}

{/* <IconButton
edge="end"
aria-label="account of current user"
aria-controls={menuId}
aria-haspopup="true"
onClick={handleProfileMenuOpen}
color="inherit"
>
<AccountCircle />
</IconButton> */}

export default Header
