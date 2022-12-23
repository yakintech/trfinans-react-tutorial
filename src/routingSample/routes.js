import CssSample2 from "../cssSample/CssSample2";
import CssSample3 from "../cssSample/CssSample3";
import AddProduct from "../materialSample/AddProduct";
import MainMaterialDesign from "../materialSample/MainMaterialDesign";
import MaterialDataGrid from "../materialSample/MaterialDataGrid";
import MaterialGridSample from "../materialSample/MaterialGridSample";
import About from "./About";
import Contact from "./Contact";
import CustomerDetail from "./CustomerDetail";
import Customers from "./Customers";
import Dashboard from "./Dashboard";
import Home from "./Home";
import NoMatch from "./NoMatch";

export const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/customers',
        element:<Customers/>
    },
    {
        path:'/customers/:id',
        element:<CustomerDetail/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/csssample2',
        element: <CssSample2/>
    },
    {
        path:'/csssample3',
        element: <CssSample3/>
    },
    {
        path:'/mainmaterial',
        element: <MainMaterialDesign/>
    },
    {
        path:'/gridsample',
        element: <MaterialGridSample/>
    },
    {
        path:'/datagrid',
        element: <MaterialDataGrid/>
    },
    {
        path:'/addproduct',
        element: <AddProduct/>
    },
    {
        path:'*',
        element:<NoMatch/>
    }
]
