import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ManageDomains from "../../Pages/ManageDomains/ManageDomains";
import AccountAnalytics from "../../Pages/AnalyticsLogs/AccountAnalytics/AccountAnalytics";
import WebAnalytics from "../../Pages/AnalyticsLogs/WebAnalytics/WebAnalytics";
import CarbonImpact from "../../Pages/AnalyticsLogs/CarbonImpact/CarbonImpact";
import SecurityInsights from "../../Pages/SecurityCenter/SecurityInsights/SecurityInsights";
import Infrastructure from "../../Pages/SecurityCenter/Infrastructure/Infrastructure";
import Investigate from "../../Pages/SecurityCenter/Investigate/Investigate";
import Turnstile from "../../Pages/Turnstile/Turnstile/Turnstile";
import Area from "../../Pages/Area/Area/Area";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/managedomain',
                element: <ManageDomains />
            },
            {
                path: '/accountanalytics',
                element: <AccountAnalytics />
            },
            {
                path: '/webanalytics',
                element: <WebAnalytics />
            },
            {
                path: '/carbonimpact',
                element: <CarbonImpact />
            },
            {
                path: '/securityinsights',
                element: <SecurityInsights />
            },
            {
                path: '/infrastructure',
                element: <Infrastructure />
            },
            {
                path: '/investigate',
                element: <Investigate />
            },
            {
                path: '/turnstile',
                element: <Turnstile />
            },
            {
                path: '/area',
                element: <Area />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    }
]);
export default router;
