export type User = {
  id: number;
  authId: string;
  username: string;
};

export type Report = {
  id: number;
  content: string;
  userId: number;
  createdAt: string;
};
