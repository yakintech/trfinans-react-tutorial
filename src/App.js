import { Link, Route, Routes } from "react-router-dom"
import { routes } from "./routingSample/routes"
import Dashboard from "./routingSample/Dashboard"
import DashboardMessages from "./routingSample/DashboardMessages"
import DashboardTasks from "./routingSample/DashboardTasks"


function App() {

  return <>
    <p>Site Header</p>
    <ul style={{ display: "flex", justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/csssample2'>Css Sample-2</Link></li>
      <li><Link to='/csssample3'>Css Sample-3</Link></li>
      <li><Link to='/mainmaterial'>Material Design</Link></li>
      <li><Link to='/gridsample'>Material Grid</Link></li>
      <li><Link to='/datagrid'>Material DATA Grid</Link></li>
      <li><Link to='/addproduct'>Add Product</Link></li>



    </ul>

    <Routes>
      {
        routes.map((item, key) => {
          if (item.path == '/dashboard') {
            return <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="/dashboard/messages"
                element={<DashboardMessages />}
              />
              <Route path="/dashboard/tasks" element={<DashboardTasks />} />
            </Route>
          }
          else {
            return <Route path={item.path} element={item.element}></Route>

          }
        })
      }
    </Routes>

    <p>Site Footer</p>
  </>
}

export default App