// src/components/dashboard/student/Profile.tsx
import { Button } from '@/components/ui/Button';

export const Profile = () => {
  // TODO: Fetch user profile from API
  const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: '2023-01-01',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Joined:</strong> {profile.joinedDate}
        </p>
      </div>
      <Button className="mt-4">Edit Profile</Button>
    </div>
  );
};
