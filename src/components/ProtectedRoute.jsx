import { useEffect, useMemo } from "react";
import { useUser } from "../contexts/useUser";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({
  allowedRoles = ["admin", "user"],
  redirect = "/login",
  children,
}) {
  const { user } = useUser();
  const isAllowedPage = useMemo(() => user && allowedRoles.includes(user.rol));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAllowedPage) {
      navigate(redirect);
    }
  }, [isAllowedPage]);

  return children;
}
