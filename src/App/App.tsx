import { lazy, Suspense, useEffect, FC, LazyExoticComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { RestrictedRoute } from "../components/RestrictedRoute";
import NotFoundPage from "../pages/NotFoundPage";
import { Container } from "./App.styled";
import { AppBar } from "../components/AppBar/AppBar";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../hooks/hook";
import { refreshUser } from "../redux/auth/operations";

const HomePage: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Home/Home")
);
const ContactsPage: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Contacts/Contacts")
);
const RegistrationPage: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Registration/Registration")
);
const LoginPage: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Login/Login")
);

export const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      {!isRefreshing && (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/registration"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </Container>
  );
};
