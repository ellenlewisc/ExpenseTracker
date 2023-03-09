import { useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios"

const Single = () => {
    const [expense, setExpense] = useState([]);

    const [err, setError] = useState(null);
  
    const location = useLocation();
    const expenseId = location.pathname.split("/")[2];
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/expenses/${expenseId}`);
          setExpense(res.data);
        }
        catch (err) {
          console.log(err.response.data)
        }
      };
      fetchData();
    }, [expenseId]);

    console.log(expense);
    return (
      <div className="container mx-auto">
        {err && <p className="text-red-500 text-center">{err}</p>}
        {expense[0] && <div>
            <h2>Expense</h2>
            <p>Category: {expense[0].name}</p>
            <p>Amount ${expense[0].Amount}</p>
            </div>}
      </div>
    );
  }
export default Single