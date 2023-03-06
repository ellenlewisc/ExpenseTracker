import { Link } from "react-router-dom"
const expenses = [
  {
    id: 1,
    amount: 50.00,
    title: "groceries"
  },
  {
    id: 2,
    amount: 70.00,
    title: "gas"
  },
]
function Home() {
  return (
    <>
      <div className="container mx-auto">
        <p className="flex justify-center text-3xl text-gray-700 font-bold mt-10">
          Expenses
        </p>
        <Link to={`/add`} className="flex justify-center">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">Add</button>
        </Link>
       

        <div className="expenses">

          {expenses.map((expense) => (
            <div className="expense" key={expense.id}>
              <div className="content">
                  <h1>{expense.title}</h1>
                  <p>${expense.amount}</p>
                <Link to={`/expense?edit=1`} ><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button></Link>
               <Link><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home