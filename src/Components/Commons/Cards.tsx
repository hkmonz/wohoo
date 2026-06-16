import { Link } from "react-router-dom";

export default function Cards({ image, title, description, logoUrl, route , starImg}:any) {
  return (
    <Link to={route}>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden  hover:shadow-lg transition-shadow">
      {starImg && (
          <div className="flex justify-center mt-2">
            <img
              src={starImg}
              alt="Stars"
              className=""
            />
          </div>
        )}
      <div className=" overflow-hidden  justify-center items-center flex px-5 pt-5 ">
        <img
          src={image}
          alt={title}
          className=" rounded-xl  mx-3 transition-transform duration-300 transform hover:scale-118"
        />
      </div>
      <div className="p-4 text-center">
        {logoUrl && (
          <div className=" flex justify-center">
            <img
              src={logoUrl}
              alt="Logo"
              className=""
            />
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
        
      </div>
    </div>
    </Link>
  );
}
