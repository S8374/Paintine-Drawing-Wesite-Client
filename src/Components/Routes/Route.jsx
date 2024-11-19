import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import All_Art from '../Pages/Allart/All_Art';
import Add_Items from '../Pages/AddCarft_Items/Add_Items';
import My_added_Items from '../Pages/MyAddedItems/My_added_Items';
import Details from '../Pages/Section/Details/Details';
import Subcategores from '../Pages/Subcategoryes/Subcategores/Subcategores';
import SeeSub from '../Pages/Section/SeeSub/SeeSub';
import Update from '../Pages/Update/Update';
import Private from '../Pages/Private/Private';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> ,
      children:[
               {
                path: '/',
                element:<Home></Home> ,
                loader:() => fetch(`https://painting-drawing-webs-server-ten.vercel.app/add`)
              } ,
              {
                path:'/allArt',
                element:<All_Art></All_Art> ,
                loader:() => fetch(`https://painting-drawing-webs-server-ten.vercel.app/add`) 
              } ,
              {
                path:'/addcraft',
                element: <Private>
                  <Add_Items></Add_Items>
                </Private>
              },
              {
                path:'/myArtlist',
                element: <Private>
                  <My_added_Items></My_added_Items>
                </Private>
              },
              {
                path:'/details/:id',
                element:<Details></Details> ,
                loader:() => fetch(`https://painting-drawing-webs-server-ten.vercel.app/add`)
              },
              {
                path: '/subcategory/:title',
                element: <Subcategores></Subcategores> ,
                loader:() =>fetch(`https://painting-drawing-webs-server-ten.vercel.app/add`)
              },
              {
                path:'/SeeSub/:_id',
                element:<SeeSub></SeeSub> ,
                loader: () => fetch(`https://painting-drawing-webs-server-ten.vercel.app/add`)
              } ,
              {
                path: '/myaddedItems',
                element: <My_added_Items></My_added_Items>
             

              },              
              {
                path:'/update/:_id',
                element:<Update></Update> ,
                loader:() => fetch(`https://painting-drawing-webs-server-ten.vercel.app/add`) 
              }
            
      ]
    },
  ]);

export default Route;