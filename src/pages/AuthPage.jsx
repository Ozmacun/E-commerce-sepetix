import Signup from "./Signup";
import Login from "./Login";

const AuthPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden flex md:flex-row flex-col w-full max-w-3xl">
        
        {/* Login Container */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-50">
          <Login />
        </div>

        {/* Signup Container */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-50">
          <Signup />
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
