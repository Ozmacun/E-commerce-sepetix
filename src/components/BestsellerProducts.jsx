export default function BestsellerProducts() {
    const products = [
      {
        id: 1,
        image: "https://via.placeholder.com/200",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountPrice: "$6.48",
        colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
      },
      {
        id: 2,
        image: "https://via.placeholder.com/200",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountPrice: "$6.48",
        colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
      },
      {
        id: 3,
        image: "https://via.placeholder.com/200",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountPrice: "$6.48",
        colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
      },
      {
        id: 4,
        image: "https://via.placeholder.com/200",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountPrice: "$6.48",
        colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
      },
      {
        id: 5,
        image: "https://via.placeholder.com/200",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountPrice: "$6.48",
        colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
      },
      {
        id: 6,
        image: "https://via.placeholder.com/200",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountPrice: "$6.48",
        colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
      },
      {
        id: 7,
        image: "https://via.placeholder.com/200",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountPrice: "$6.48",
        colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
      },
      {
        id: 8,
        image: "https://via.placeholder.com/200",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountPrice: "$6.48",
        colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto py-10">
        {/* Başlık Alanı */}
        <div className="text-center mb-6">
          <h4 className="text-xl leading-[1.875rem] font-normal text-[#737373]">Featured Products</h4>
          <h1 className="text-2xl font-bold">BESTSELLER PRODUCTS</h1>
          <p className="text-gray-500">Problems trying to resolve the conflict between</p>
        </div>
  
        {/* Ürünler Listesi */}
        <div className="flex flex-wrap justify-center gap-6 items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[239px] h-[427px] flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover rounded-md"
              />
              <h5 className="mt-3 font-bold">{product.title}</h5>
              <p className="text-gray-500 text-sm">{product.department}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-500 line-through">{product.price}</span>
                <span className="text-green-600 font-bold">{product.discountPrice}</span>
              </div>
              <div className="flex mt-2">
                {product.colors.map((color, index) => (
                  <span key={index} className={`w-4 h-4 rounded-full ${color} mx-1`}></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  