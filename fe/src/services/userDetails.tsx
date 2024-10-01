import { jwtDecode } from 'jwt-decode';

const decodeUser = async (token: string) => {
  const user: { role: string; name: string; email: string } = await jwtDecode(
    token,
  );
  return user;
};

export default decodeUser;
