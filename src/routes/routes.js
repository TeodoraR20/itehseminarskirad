import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Category from '../components/admin/Category';
import Category2 from '../components/admin/Category2';
import ViewCategory from '../components/admin/ViewCategory';
import AddProduct from '../components/admin/product/AddProduct';
import React from 'react';

const routes  = [
{path: '/admin' ,exact: true,  name: 'Admin'},

{path: '/admin/dashboard',exact: true,  name: 'Dashboard' ,component: Dashboard},

{path: '/admin/category',exact: true,  name: 'Category' ,component: Category},
{path: '/admin/store-category',exact: true,  name: 'Category2' ,component: Category2},
{path: '/admin/view-category',exact: true,  name: 'ViewCategory' ,component: ViewCategory},
{path: '/admin/profile',exact: true, name: 'Profile', component: Profile },

{path: '/admin/add-product',exact: true, name: 'AddProduct', component: AddProduct },
];


export default routes;