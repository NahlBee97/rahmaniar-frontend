import { useFormik } from "formik";
import * as Yup from "yup";

// --- Validation Schema ---

const loginValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

// --- Main Page Component ---

const AdminLoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values: any) => {
      console.log("Login Attempt:", values);
      // Add authentication logic here
    },
  });

  return (
    <div className="bg-linear-to-br from-[#0a111a] to-[#12222b] min-h-screen text-gray-300 font-sans flex flex-col">
      <main className="grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-400">
                Admin Login
              </h1>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-400 mb-1"
                  htmlFor="username"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className={`appearance-none block w-full px-3 py-2 bg-gray-900/50 border rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-colors ${
                      formik.touched.username && formik.errors.username
                        ? "border-red-500"
                        : "border-gray-600"
                    }`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <p className="mt-1 text-sm text-red-500">
                      {/* {formik.errors.username} */}
                    </p>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-400 mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className={`appearance-none block w-full px-3 py-2 bg-gray-900/50 border rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-colors ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-600"
                    }`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {/* {formik.errors.password} */}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-colors"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLoginPage;
