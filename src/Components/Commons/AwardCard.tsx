interface AwardCardProps {
  image?: string;
  alt?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
}

export function AwardCard({ image, alt }: AwardCardProps) {
  return (
    <div>
      <div className={`   overflow-hidden  transition-all duration-500 `}>
        <img
          src={image}
          alt={alt ?? "Award or recognition displayed on the trophy"}
          className="object-cover rounded-3xl   "
        />
      </div>
    </div>
  );
}
