import React from "react";
import { useFormik } from "formik";
import { userSchemas } from "../Schemas";

const initialValues = {
  name: "",
  email: "",
  mobileNumber: "",
  dob: "",
  district: "",
};
const AddAuthority = () => {
  const submitHandler = (values) => {};

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchemas,
      onSubmit: (values, action) => {
        console.log(values);
        submitHandler(values);

        // action.resetForm();
      },
    });
  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="w-full max-w-2xl">
        <h2 className="text-center text-2xl uppercase font-semibold font-serif text-gray-800">
          Add New Authority
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 mt-5"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <small className="text-ligth text-red-600">{errors.name}</small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <small className="text-ligth text-red-600">{errors.email}</small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              name="mobileNumber"
              type="number"
              value={values.mobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Number"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
            {errors.mobileNumber && touched.mobileNumber ? (
              <small className="text-ligth text-red-600">
                {errors.mobileNumber}
              </small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              name="dob"
              type="date"
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Number"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
            {errors.dob && touched.dob ? (
              <small className="text-ligth text-red-600">{errors.dob}</small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="distric"
            >
              District
            </label>
            <select
              name="district"
              id="district"
              value={values.district}
              className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select any One</option>
              <option value="Heelo">Select any Nothig</option>
              {/* {district.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))} */}
              {/* <option value="Jamnagar">Jamnagar</option>
              <option value="Surat">Surat</option>
              <option value="Anand">Anand</option> */}
            </select>
            {errors.district && touched.district ? (
              <small className="text-ligth text-red-600">
                {errors.district}
              </small>
            ) : null}
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 uppercase hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={console.log("Hello")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAuthority;
