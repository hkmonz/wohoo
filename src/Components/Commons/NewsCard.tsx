export default function NewsCard({ title, author, date, description, authorImage }:any) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h3>

      <div className="flex items-center gap-3 mb-4">
        {authorImage && (
          <img
            src={authorImage}
            alt={author}
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-900">{author}</p>
          <p className="text-xs text-gray-600">{date}</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex gap-3">
        <button className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition">
          ←
        </button>
        <button className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition">
          →
        </button>
      </div>
    </div>
  );
}
