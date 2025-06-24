import  { useReducer } from 'react';
import axios from 'axios';
import Header from '../common/header';
import { formReducer, initialState} from './resource';
const ResourceForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e:any) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/resources', state, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Resource created!');
      dispatch({ type: 'RESET' });
    } catch (err) {
      console.error(err);
      alert('Error creating resource');
    }
  };

  return (
 <>
 <Header/>
  
  <form onSubmit={handleSubmit} className="bg-gray-200 mt-10 p-6 rounded-3xl max-w-4xl mx-auto">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
    <div>
      <label htmlFor="brand" className="block mb-1 font-semibold">Brand</label>
      <input
        id="brand"
        name="brand"
        value={state.brand}
        onChange={handleChange}
        placeholder="Brand"
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>

   
    <div>
      <label htmlFor="model" className="block mb-1 font-semibold">Model</label>
      <input
        id="model"
        name="model"
        value={state.model}
        onChange={handleChange}
        placeholder="Model"
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>

    
    <div className="md:col-span-2">
      <label htmlFor="specification" className="block mb-1 font-semibold">Specification</label>
      <textarea
        id="specification"
        name="specification"
        value={state.specification}
        onChange={handleChange}
        placeholder="Specification"
        className="w-full border border-gray-300 rounded px-3 py-2"
        rows={4}
      />
    </div>

  
    <div>
      <label htmlFor="purchaseDate" className="block mb-1 font-semibold">Purchase Date</label>
      <input
        id="purchaseDate"
        type="date"
        name="purchaseDate"
        value={state.purchaseDate}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>


    <div>
      <label htmlFor="warrantyExpiry" className="block mb-1 font-semibold">Warranty Expiry</label>
      <input
        id="warrantyExpiry"
        type="date"
        name="warrantyExpiry"
        value={state.warrantyExpiry}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>


    <div>
      <label htmlFor="resourceTypeId" className="block mb-1 font-semibold">Resource Type ID</label>
      <input
        id="resourceTypeId"
        type="number"
        name="resourceTypeId"
        value={state.resourceTypeId}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>

   
    <div>
      <label htmlFor="resourceClassId" className="block mb-1 font-semibold">Resource Class ID</label>
      <input
        id="resourceClassId"
        type="number"
        name="resourceClassId"
        value={state.resourceClassId}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>


    <div>
      <label htmlFor="resourceStatusId" className="block mb-1 font-semibold">Resource Status ID</label>
      <input
        id="resourceStatusId"
        type="number"
        name="resourceStatusId"
        value={state.resourceStatusId}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>

    <div>
      <label htmlFor="batchId" className="block mb-1 font-semibold">Batch ID</label>
      <input
        id="batchId"
        type="number"
        name="batchId"
        value={state.batchId}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>
  </div>

  <button
    type="submit"
    className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    Create Resource
  </button>
</form>

</>
  );
};

export default ResourceForm;
