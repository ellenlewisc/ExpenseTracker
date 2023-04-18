import React, { useState, useEffect  } from "react";
import axios from "axios";
import { useLocation, useNavigate} from "react-router-dom";

const Expense = () => {
    const state = useLocation().state;
    const [amount, setAmount] = useState(state?.Amount || "");
    const [categoryId, setCategoryId] = useState(state?.CategoryId || 0);
    
    const navigate = useNavigate();
    
    const [categories, setCategoires] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/categories");
                setCategoires(res.data);
            }
            catch (err) {
                console.log(err.response.data)
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            console.log(amount);
            console.log(categoryId);
            state
              ? await axios.put(`/expenses/${state.Id}`, {
                  amount,
                  categoryId
                })
              : await axios.post(`/expenses/`, {
                amount,
                categoryId
                });
                navigate("/")
          } catch (err) {
            console.log(err);
          } 
      };

    return (
            <div className="flex justify-center mt-10 ">
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-grey">
                             Expense
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} name="categoryId" id="categoryId" className="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 "  required="">
                                <option value="0">Select Category</option>
                                    {categories.map((category) => {
                                        return (
                                            <option value={category.id} key={category.id}>{category.name}</option>
                                        )


                                    })} </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="amount" name="amount" id="amount" placeholder="Amount" className="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5" required="" />
                            </div>
                            <button onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
export default Expense