import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";

export const RouterProviderImpl = () => {
	const userIsLoggedIn = true;
	const publicRoutes = [
		{
			path: "/",
			element: <div>Home Page</div>,
			errorElement: <div>Not Found</div>
		},
		{
			path: "/auth/login",
			element: <div>Login Page</div>
		},
		{
			path: "/auth/register",
			element: <div>Register Page</div>
		}
	];
	const protectedRoutes = [
		{
			path: "app",
			element: <App />,
			children: [
				{
					path: "files",
					element: <div>Files</div>
				}				
			]
		}
	];
	const routes = [ ...publicRoutes, ...(userIsLoggedIn ? protectedRoutes : []) ];
	const router = createBrowserRouter(routes);
	return <RouterProvider router={router} />
}