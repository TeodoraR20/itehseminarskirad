import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Category from '../components/admin/Category';

import React from 'react';

const routes  = [
{path: '/admin' ,exact: true,  name: 'Admin'},

{path: '/admin/dashboard',exact: true,  name: 'Dashboard' ,component: Dashboard},

{path: '/admin/category',exact: true,  name: 'Dashboard' ,component: Category},

{path: '/admin/profile',exact: true, name: 'Profile', component: Profile },


];


export default routes;