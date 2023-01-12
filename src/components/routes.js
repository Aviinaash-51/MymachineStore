import ApprovedList from "../pages/ApprovedList";
import CompanyList from "../pages/CompanyList";
import Login from "../pages/Login";

const routes =[
    { path:"/",  component:<Login />},
    {path:'CompanyList', component:<CompanyList />},
    {path:'ApprovedList', component:<ApprovedList />},
    // {path:'NanoCoolCoat', component : <NanoCoolCoat />},
    // {path:'project', component : <Project />},
    // {path:'blog', component: <Blogs />},
    // {path:"contact", component: <ContactUs />}
    


];
export default routes;
