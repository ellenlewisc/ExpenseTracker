import { useLocation, useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios"

const Category = () => {
  const state = useLocation().state;
  const [name, setName] = useState(state?.name || "");

  const navigate = useNavigate();

  const handleSubmit = async e =>{
      e.preventDefault()
      try {
        console.log(state)
          state
            ? await axios.put(`/categories/${state.CategoryId}`, {
                name
              })
            : await axios.post(`/categories/`, {
              name
              });
              navigate("/")
        } catch (err) {
          console.log(err.response.data);
        } 
    };

  return (
          <div className="flex justify-center mt-10 ">
              <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-grey">
                          Category
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                              <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" placeholder="Name" className="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5" required="" />
                          </div>
                          <button onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                      </form>
                  </div>
              </div>
          </div>
  )
}
export default Category