 
import createRoutes from "@/routes/create.route"
import studentRoutes from "@/routes/students.routes"
import employeeRoutes from "@/routes/employee.routes"
// import Routes from "@/routes/auth.route"
// import authroutes from '@/routes/auth.route'


const routes =[
    
    
{
    path:'/create',
    func: createRoutes,
},
{
    path:'/student',
    func: studentRoutes,
},  


{
    path:'/employee',
    func : employeeRoutes,
},
// {
//     path:'/auth',
//     func : Routes,



// {
//     path:'/auth',
//     func : authroutes,
// }

];
export default routes;