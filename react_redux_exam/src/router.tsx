import { createBrowserRouter } from "react-router-dom";
import {
    StockPage,
    SalePage,
    PurchasePage,
    DataPage,
    ErrorPage,
} from "./routers/index"

const router = createBrowserRouter([
    {
        path: '/',
        element: <StockPage />,
    },
    {
        path: "/sale",
        element: <SalePage />
    },
    {
        path: '/purchase',
        element: <PurchasePage />,
    },
    {
        path: "/data",
        element: <DataPage />
    },
]);

export default router;