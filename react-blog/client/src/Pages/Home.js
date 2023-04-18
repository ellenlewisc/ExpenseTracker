import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import { faEdit, faCircleXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const categories = [];
  const [otherCategories, setOtherCategories] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/expenses");
        const catRes = await axios.get("/categories");
        setExpenses(res.data);
        setOtherCategories(catRes.data);
      }
      catch (err) {
        setError(err.response.data)
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/expenses/${id}`);
      window.location.reload();
    } catch (err) {
      err.data && console.log(err.response.data);
    }
  }
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`/categories/${id}`);
      window.location.reload();
    } catch (err) {
      err.data && console.log(err.response.data);
    }
  }
  console.log(otherCategories)
  return (
    <div className="container mx-auto">
    <h1 className="flex justify-center text-gray-700 font-bold mt-10 p-2">
      Expenses
    </h1>
    <Link to="/expense" className="flex justify-center font-bold no-underline p-2">
      <FontAwesomeIcon className="icon text-green-500" icon={faPlus}/>Add Expense
    </Link><br></br>
    <Link to="/category" className="flex justify-center font-bold no-underline">
      <FontAwesomeIcon className="icon text-green-500" icon={faPlus}/>Add Category
    </Link>

    {err && <p className="text-red-500 text-center">{err}</p>}

    <div className="expenses bg-gray-50 p-6 mt-10">
      {expenses.map((expense) => {
        var newCategory = false;
        if (!categories.includes(expense.CategoryId)) {
          categories.push(expense.CategoryId);
          newCategory = true;
        }
        if (newCategory) {
          return (
            <div key={expense.Id}>
              <h3 className="mt-10 mb-10 underline">{expense.name}<span>
                <Link to={`/category?edit=${expense.CategoryId}`} state={expense} ><FontAwesomeIcon className="icon ml-5" icon={faEdit} /></Link>
                <FontAwesomeIcon className="icon ml-5 text-red-500" icon={faCircleXmark} onClick={() => deleteCategory(expense.Id)} />
              </span></h3>
              <p className="fw-bold">${expense.Amount}<span className="content mb-10 ">
                <Link to={`/expense?edit=${expense.Id}`} state={expense} ><FontAwesomeIcon className="icon ml-5" icon={faEdit} /></Link>
                <FontAwesomeIcon className="icon ml-5 text-red-500" icon={faCircleXmark} onClick={() => handleDelete(expense.Id)} />
              </span></p>
            </div>
          )
        }
        else {
          return (
            <div key={expense.Id} >
              <p className="fw-bold">${expense.Amount}<span className="content mb-10 ">
                <Link to={`/expense?edit=${expense.Id}`} state={expense} ><FontAwesomeIcon className="icon ml-5" icon={faEdit} /></Link>
                <FontAwesomeIcon className="icon ml-5 text-red-500" icon={faCircleXmark} onClick={() => handleDelete(expense.Id)} />
              </span></p>
            </div>
          )
        }
      })}
    </div>
    <div className="expenses bg-gray-50 p-6">
    {otherCategories.map((cat) => {
        var display = false;
        if (!categories.includes(cat.id)) {
          display = true;
        }
        if (display) {
          return (
            <div key={cat.id}>
              <h3 className="mt-10 mb-10 underline">{cat.name}<span>
                <Link to={`/category?edit=${cat.id}`} state={cat} ><FontAwesomeIcon className="icon ml-5" icon={faEdit} /></Link>
                <FontAwesomeIcon className="icon ml-5 text-red-500" icon={faCircleXmark} onClick={() => deleteCategory(cat.id)} />
              </span></h3>
            </div>
          )
        }
      })}
  </div>
    </div>
   
  );
}
export default Home