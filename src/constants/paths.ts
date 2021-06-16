import { FC } from "react";

export const HOME = "/";
export const MY_POLLS = "/my-polls";
export const ALL_POLLS = "/all-polls";
export const POLL_VOTE = "/poll/:id";

export interface RouteProps {
  path: string;
  exact: boolean;
  component: () => FC;
  title: string;
  hidden: boolean;
}

export const routes: RouteProps[]  = [
  {
    path: HOME,
    exact: true,
    component: () => require('../pages/Home').default,
    title: 'Home',
    hidden: false
  },
  {
    path: MY_POLLS,
    exact: true,
    component: () => require('../pages/MyPolls').default,
    title: 'My Polls',
    hidden: false
  },
  {
    path: ALL_POLLS,
    exact: true,
    component: () => require('../pages/AllPolls').default,
    title: 'All Polls',
    hidden: false
  },
  {
    path: POLL_VOTE,
    exact: true,
    component: () => require('../pages/PollVote').default,
    title: 'Poll Vote',
    hidden: true
  }
]