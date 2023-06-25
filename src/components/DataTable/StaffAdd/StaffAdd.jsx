import React from "react";
import PropTypes from "prop-types";
import "./StaffAdd.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

export default function StaffAdd() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("VEP");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formData = {
    email,
    role,
    username,
    phone,
    password,
    confirmPassword,
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    // console.log(formData);
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let result = await fetch("http://localhost:3004/api/account/staff", {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.status == 200 || response.status == 201) {
          console.log(response.json());
          navigate("/admin/admin/staff");
        } else {
          console.log("Something went wrong");
        }
      });
    }, 2000);
  };

  const handleRoleSelection = (e) => {
    setRole(e.target.value);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <fieldset
          style={{
            padding: 0,
            borderLeft: "7px solid #00a967",
            borderRight: "none",
            borderTop: "7px solid #00a967",
          }}
        >
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <div
              className="header-left"
              style={{ marginLeft: "150px", marginTop: "0px" }}
            >
              <h1 className="app-content-headerText">Add Staff Account</h1>
            </div>

            <div>
              <form
                action="#"
                autoComplete="off"
                style={{ marginLeft: "-150px", marginTop: "-20px" }}
              >
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="email"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="name"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>
                  <div>
                    <label htmlFor="category">Role</label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      onChange={handleRoleSelection}
                    >
                      <option value="VEP">VEP</option>
                      <option value="REP">REP</option>
                      <option value="REP GL">REP Group Leader</option>
                      <option value="VEP GL">VEP Group Leader</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      style={{ color: "#0000" }}
                      placeholder="Confirm Password"
                      required=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  onClick={handleSubmission}
                >
                  {loading ? (
                    <SyncLoader color="#f1f1f1" loading={loading} size={10} />
                  ) : (
                    "Add Staff"
                  )}
                </button>
              </form>
            </div>
          </div>
        </fieldset>
      </section>
    </div>
  );
}

StaffAdd.propTypes = {};
