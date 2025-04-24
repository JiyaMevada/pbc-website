import { useState } from 'react';
import logo from "../photo/image.png";


const tasks = {
  "Web Development": [
    "Build the Hero Section of a Startup Landing Page",
    "Responsive Navbar with Mobile Toggle",
  ],
  "Cybersecurity": [
    "Design a Login Attempt Warning UI",
    "Create a Password Strength Indicator",
  ],
  "App Development": [
    "Create a Mobile App Card Grid",
    "Splash Screen with Logo Animation",
  ],
  "Machine Learning": [
    "Build a Model Training Progress UI",
    "Design a \"Model Comparison\" Table",
  ],
  "UI/UX Design": [
    "Design a Component Style Guide Page",
    "Dark Mode Toggle Interface",
  ],
  "Cloud & DevOps": [
    "Deployment Pipeline Timeline UI",
    "Server Health Dashboard",
  ],
};

function DashboardTasks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Company Assigned Tasks
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(tasks).map(([category, taskList]) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-xl p-6 border-t-8 border-blue-800 hover:shadow-2xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-b pb-2">
                {category}
              </h2>
              <ul className="space-y-3">
                {taskList.map((task, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 border-l-4 border-blue-700 text-blue-900 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-100"
                  >
                    ✅ {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter both email and password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
        <form
          onSubmit={handleLogin}
          className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6"
        >
          <div className="flex justify-center">
            <img src={logo} alt="OpenMentor Logo" className="h-16" />
          </div>
          <h2 className="text-2xl font-bold text-center text-blue-800">Login to Dashboard</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="OpenMentor Logo" className="h-10" />
          <h1 className="text-xl font-bold text-blue-900">OpenMentor Dashboard</h1>
        </div>
        <div>
          <span className="text-gray-600 mr-4">Welcome, {email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      </div>

      <DashboardTasks />

      {/* Achievement Section */}
      <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Achievement: Certificate of Completion
          </h1>
          <p className="text-lg text-center text-blue-800 mb-6">
          The certificate will be sent to your email address once you complete all tasks. It can be added to your portfolio or resume as a recognition of your achievements.
          </p>
          <div className="flex justify-center">
            <img
              src="/certificate.jpg"// Add the correct image path here
              alt="Certificate of Completion"
              className="w-1/2 border rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



