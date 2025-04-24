import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../../appwrite/auth'
import { login, logout } from '../../store/authSlice'
import logo from "../photo/image.png" // import your logo here

function Dashboard() {
  const { status, userData } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      await authService.login(data)
      const user = await authService.getCurrentUser()
      dispatch(login({ userData: user }))
      reset()
    } catch {
      alert("Login failed. Please try again.")
    }
  }

  const handleLogout = async () => {
    await authService.logout()
    dispatch(logout())
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      {status ? (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6">
          <div className="flex justify-center">
            <img src={logo} alt="OpenMentor Logo" className="h-16" />
          </div>
          <h2 className="text-2xl font-bold text-center text-blue-800">
            Welcome, {userData.name || userData.email}
          </h2>

          <div className="grid gap-4 mb-6">
            <div className="bg-blue-900 text-white p-4 rounded-lg shadow">✅ Task 1: Pure CSS Layout</div>
            <div className="bg-blue-900 text-white p-4 rounded-lg shadow">✅ Task 2: Button Effects</div>
            <div className="bg-blue-900 text-white p-4 rounded-lg shadow">✅ Task 3: Flexbox/Grid Challenge</div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6"
        >
          <div className="flex justify-center">
            <img src={logo} alt="OpenMentor Logo" className="h-16" />
          </div>
          <h2 className="text-2xl font-bold text-center text-blue-800">Login to Dashboard</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
      )}
    </div>
  )
}

export default Dashboard
