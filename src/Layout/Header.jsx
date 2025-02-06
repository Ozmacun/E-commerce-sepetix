import { FaPhone, FaEnvelope, FaShoppingCart, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      {/* Üst Kısım */}
      <div className="bg-black text-white text-sm py-2 px-6 flex justify-between items-center">
        {/* Sol Taraf: Telefon ve E-posta */}
        <div className="flex items-center space-x-4">
          <FaPhone className="text-gray-400" />
          <span>5394220544</span>
          <FaEnvelope className="text-gray-400" />
          <span>info@sepetix.com</span>
        </div>

        {/* Orta: Hoşgeldiniz */}
        <div className="text-gray-300 font-semibold">Hoşgeldiniz!</div>

        {/* Sağ Taraf: Sosyal Medya */}
        <div className="flex space-x-4">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md">
        {/* Sol Taraf: Sepet ve Marka Adı */}
        <div className="flex items-center space-x-2">
          <FaShoppingCart className="text-2xl text-black" />
          <span className="text-2xl font-bold">SEPETİX</span>
        </div>

        {/* Orta: Navigasyon Linkleri */}
        <div className="space-x-6 text-lg font-medium">
          <a href="#" className="hover:text-gray-500">Ana Sayfa</a>
          <a href="#" className="hover:text-gray-500">Hakkımızda</a>
          <a href="#" className="hover:text-gray-500">Hizmetler</a>
          <a href="#" className="hover:text-gray-500">İletişim</a>
        </div>

        {/* Sağ Taraf: Butonlar */}
        <div className="space-x-4">
          <button className="border border-black text-black px-4 py-2 rounded-md hover:bg-gray-200">
            Login
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
