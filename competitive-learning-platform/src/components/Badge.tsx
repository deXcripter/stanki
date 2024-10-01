// src/components/Badge.tsx
interface BadgeProps {
  name: string;
  description: string;
  imageUrl: string;
}

export default function Badge({ name, description, imageUrl }: BadgeProps) {
  return (
    <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
      <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
