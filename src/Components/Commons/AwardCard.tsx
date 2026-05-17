interface AwardCardProps {
  image?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
}

export function AwardCard({ image }: AwardCardProps) {
  return (
    <div>
      <div className={`   overflow-hidden  transition-all duration-500 `}>
        <img
          src={image}
          alt={'award image'}
          className="object-cover rounded-3xl   "
        />
      </div>
    </div>
  );
}
