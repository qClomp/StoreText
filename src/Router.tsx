
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import PageMain from "../pages/PageMain"
import PageNotFound from "../pages/PageNotFound"
import PageText from "../pages/PageText"

export default function Router() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={ <PageMain/> } />
                    {/* <Route path="*" element={ <PageNotFound/>} /> */}
                    <Route path="/:texturl" element={ <PageText/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}