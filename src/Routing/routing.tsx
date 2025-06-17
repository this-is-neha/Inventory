
import { Routes, Route } from "react-router-dom";
import Homepage from "../Home";

const RoutingConfig=()=>{{
    return (<Routes>
  <Route path="" element={<Homepage />} />
 
    </Routes>)
}}
export default RoutingConfig