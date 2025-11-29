import { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

const Onboarding = lazy(() => import('../pages/onboarding/page'));
const Home = lazy(() => import('../pages/home/page'));
const LegalGuides = lazy(() => import('../pages/legal-guides/page'));
const GuideDetail = lazy(() => import('../pages/legal-guides/detail/page'));
const Search = lazy(() => import('../pages/search/page'));
const AdvocateProfile = lazy(() => import('../pages/advocate/page'));
const Enquiry = lazy(() => import('../pages/enquiry/page'));
const Dashboard = lazy(() => import('../pages/dashboard/page'));
const Chat = lazy(() => import('../pages/chat/page'));
const Notifications = lazy(() => import('../pages/notifications/page'));
const Settings = lazy(() => import('../pages/settings/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/onboarding" replace />
  },
  {
    path: '/onboarding',
    element: <Onboarding />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/legal-guides',
    element: <LegalGuides />
  },
  {
    path: '/legal-guides/:id',
    element: <GuideDetail />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/advocate/:id',
    element: <AdvocateProfile />
  },
  {
    path: '/enquiry',
    element: <Enquiry />
  },
  {
    path: '/enquiry/:id',
    element: <Chat />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/chat/:id',
    element: <Chat />
  },
  {
    path: '/notifications',
    element: <Notifications />
  },
  {
    path: '/settings',
    element: <Settings />
  },
  {
    path: '/settings/profile',
    element: <Settings />
  },
  {
    path: '/settings/preferences',
    element: <Settings />
  },
  {
    path: '/settings/notifications',
    element: <Settings />
  },
  {
    path: '/settings/about',
    element: <Settings />
  },
  {
    path: '/settings/compliance',
    element: <Settings />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;