export default function TestimonialCard({ bgColor, icon, title, description }:any) {
  return (
    <div className={`rounded-lg p-8 text-white ${bgColor}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <p className="text-sm font-medium">Your Vision in 4 months</p>
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-white text-opacity-90 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
