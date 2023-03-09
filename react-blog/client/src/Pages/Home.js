import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

function Home() {
  const [expenses, setExpenses] = useState([]);

  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/expenses");

        setExpenses(res.data);
      }
      catch (err) {
        setError(err.response.data)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <p className="flex justify-center text-3xl text-gray-700 font-bold mt-10">
        Expenses
      </p>
      <Link className="flex justify-center">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">Add</button>
      </Link>

      {err && <p className="text-red-500 text-center">{err}</p>}
      <div className="expenses">
        {expenses.map((expense) => {
          console.log(expense)
          return (
            <div key={expense.Id}>${expense.Amount}
              <div className="content">
                <Link to={`/expense/${expense.Id}`} ><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button></Link>
                <Link to={`/expense/${expense.Id}`}><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button></Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default Home