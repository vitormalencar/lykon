import React from 'react'
import { withRouter } from 'react-router'
import { routes } from '../../../Routes/index'
import './navigation.css'

const onClickHandler = (to, history) => history.push(to)

const ActiveRoute = (to, pathname) => to === pathname
  ? 'active-tab'
  : null

const NavButton = ({ to, history, name, location }) => (
  <label onClick={() => onClickHandler(to, history)} className="tabbar__item">
    <input type="radio" name="route" />
    <button
      className={`tabbar__button tabbar--bottom-border__button ${ActiveRoute(to, location.pathname)}`}>
      {name}
    </button>
  </label >
)

const NavButtonLink = withRouter(NavButton)

const Navigation = () =>
  <div className="tabbar">
    {routes
      .filter((route) => !route.navHide)
      .map((route) => <NavButtonLink key={route.name} name={route.name} to={route.path} />)}
  </div>


export default Navigation