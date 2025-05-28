import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex justify-center px-4">
      <div className="bg-white p-6 rounded-[15px] w-full max-w-sm shadow">
        <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-gray-500 text-sm mb-5 leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mb-4">
          <label className="text-xs font-semibold text-[#9C4DF4] mb-1 block">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#9C4DF4]"
          />
        </div>

        <div className="mb-5">
          <label className="text-xs font-semibold text-[#9C4DF4] mb-1 block">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#9C4DF4]"
          />
        </div>

        <button
          className="w-full py-2 rounded text-sm font-semibold bg-[#D0D0D0] text-white"
          onClick={() => navigate('/account')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
