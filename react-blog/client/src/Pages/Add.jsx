import { Link } from "react-router-dom"
const Add = () => {
    return(
        <>
           <div class="flex justify-center mt-10 ">
                    <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-grey">
                               Add Expense
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                                    <input type="category" name="category" id="category" class="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="Category" required="" />
                                </div>
                                <div>
                                    <label for="amount" class="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                                    <input type="amount" name="amount" id="amount" placeholder="Amount" class="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5" required="" />
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>

    )
}
export default Add