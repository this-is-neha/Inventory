
import { Routes, Route } from "react-router-dom";
import Homepage from "../Home";
import ResourceForm from "../Resource/resourcecreate";
import ResourceList from "../Resource/resourcelist";
const RoutingConfig=()=>{{
    return (<Routes>
  <Route path="" element={<Homepage />} />
 <Route path="/resource/create" element={<ResourceForm />} />
 <Route path="/resource/list" element={<ResourceList />} />

    </Routes>)
}}
export default RoutingConfig