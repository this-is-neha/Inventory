
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#052B3E] p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Verisk Logo" className="h-8" />
          <span className="text-white text-3xl font-semibold">Verisk</span>
        </div>

      
        <button
          onClick={() => navigate('/login')}
          className="text-white  text-xl font-medium"
        >
          Login/Signup
        </button>
      </div>
    </>
  );
};

export default Header;
