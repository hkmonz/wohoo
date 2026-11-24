import { Link } from "react-router-dom";

export default function Cards({ image, imageAlt, title, description, logoUrl, route , starImg, starAlt}:any) {
  return (
    <Link to={route}>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden  hover:shadow-lg transition-shadow">
      {starImg && (
          <div className="flex justify-center mt-2">
            <img
              src={starImg}
              alt={starAlt ?? "Product rating"}
              className=""
            />
          </div>
        )}
      <div className=" overflow-hidden  justify-center items-center flex px-5 pt-5 ">
        <img
          src={image}
          alt={imageAlt ?? `${title} product image`}
          className=" rounded-xl  mx-3 transition-transform duration-300 transform hover:scale-118"
        />
      </div>
      <div className="p-4 text-center">
        {logoUrl && (
          <div className=" flex justify-center">
            <img
              src={logoUrl}
              alt="WooHoo logo"
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
