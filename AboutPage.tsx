interface StarRatingProps {
  rating: number;
  max?: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, max = 5, size = 'md' }: StarRatingProps) {
  const sizeClass = size === 'sm' ? 'text-xs' : 'text-sm';
  return (
    <div className={`flex items-center gap-1 ${sizeClass}`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <span key={i} className={filled ? 'text-yellow-400' : half ? 'text-yellow-300' : 'text-gray-300'}>
            ★
          </span>
        );
      })}
      <span className="text-muted-foreground ml-1 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}
