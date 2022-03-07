
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import PageMain from "../pages/PageMain"
import PageNotFound from "../pages/PageNotFound"

export default function Router() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={ <PageMain/> } />
                    <Route path="*" element={ <PageNotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}