export interface Contact {
  id?: string;
  name: string;
  number: string;
}

export interface ContactsState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

export interface FilterState {
  filter: string;
}

export interface User {
  name?: null | string;
  email: null | string;
  password?: string;
}

export interface UserAuth {
  user: User;
  token: string;
}

export interface AuthState {
  user: User;
  token: null | string;
  isLoggedIn?: boolean;
  isRefreshing?: boolean;
  isLoading?: boolean;
  error?: null | string;
}
