import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

interface User {
  blocked_at: Date | null;
  created_at: Date | null;
  deleted_at: Date | null;
  email: string;
  img_path: string | null;
  nickname: string;
  password: string;
  role: string;
  updated_at: Date | null;
  user_type: string;
}

interface Vet {
  chat_count: number | null;
  created_at: Date | null;
  deleted_at: Date | null;
  description: string;
  grade: number;
  hospital_name: string;
  id: number;
  img_path: string | null;
  name: string;
  region: string;
  status: string;
  updated_at: Date | null;
  user_email: string;
}

interface UserResponse {
  user: User;
  ver: Vet | null;
}

const getUsers = async (): Promise<UserResponse> => {
  const result = await API.get<{ data: UserResponse }>('/users');
  return result.data;
};

export const useGetUsersQuery = () => {
  return useQuery(['user-key'], getUsers);
};