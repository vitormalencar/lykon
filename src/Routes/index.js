import React from 'react'
import { Route } from 'react-router-dom'

import store from '../store'
import module from '../module'
import AsyncComponent from '../Common/AsyncComponent'

const register = module(store);
const challenges = () => register('challenges', import(/* webpackChunkName: "challenges" */ '../Modules/Challenges/index'))
const challenge = () => register('challenge', import(/* webpackChunkName: "challenge" */ '../Modules/Challenge/index'))
const profile = () => register('profile', import(/* webpackChunkName: "profile" */ '../Modules/Profile/index'))

export const routes = [{
  path: '/',
  name: 'challenges',
  exact: true,
  component: challenges,
},
{
  path: '/challenge/:id',
  name: 'challenge',
  exact: false,
  navHide: true,
  component: challenge,
},
{
  path: '/profile/',
  name: 'profile',
  exact: true,
  component: profile,
}]

export const routeComponents = routes.map(({ path, component, exact, params }, key) =>
  <Route
    key={key}
    path={path}
    exact={exact}
    component={() => <AsyncComponent moduleProvider={component} />}
  />
)