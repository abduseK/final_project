import React from 'react';
import PropTypes from 'prop-types';
import "./ViewStaffTable.css";

const ViewStaffTable = props => {
  return (
    <div>
     <section class="bg-white dark:bg-gray-900">
  <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update product</h2>
    <form action="#" style={{ marginLeft: "-150px", marginTop: "-20px" }}>
      <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
        <div class="sm:col-span-2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
          <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Tinsae Birhan" placeholder="full  name" required=""/>
        </div>
        <div class="w-full">
          <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="tinsaebirhan@gmail.com" placeholder="email" required=""/>
        </div>
        <div class="w-full">
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
          <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="0947301844" placeholder="phone" required=""/>
        </div>
        <div class="w-full">
          <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
          <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
      <option selected="">VEP</option>
      <option value="TV">REP</option>
      <option value="PC">REP Group Leader</option>
      <option value="GA">VEP Group Leader</option>
    </select>        </div>
        <div class="w-full">
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Password" placeholder="Password" required=""/>
        </div>
        
      

       
        
      </div>
      <div class="flex items-center space-x-4">
        <button type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Update Staff Account
        </button>
        <button type="button" class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" style={{color:"#fff", width:"100px", backgroundColor:"#DC2626"}}>
          Delete
        </button>
      </div>
    </form>
  </div>
</section>

    </div>
  );
};

ViewStaffTable.propTypes = {};

export default ViewStaffTable;
