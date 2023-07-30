import { useAppSelector } from "./hook";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../redux/auth/selectors";
import { User } from "../types/types";

export const useAuth = () => {
  const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn)!;
  const isRefreshing: boolean = useAppSelector(selectIsRefreshing)!;
  const user: User = useAppSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
