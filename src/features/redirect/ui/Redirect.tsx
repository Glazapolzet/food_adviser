import { FC, useEffect } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  type NavigateOptions,
} from "react-router-dom";

interface RedirectProps {
  from: string;
  to: string | number;
  options?: NavigateOptions;
}

export const Redirect: FC<RedirectProps> = ({ from, to, options = {} }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== from) {
      return;
    }

    navigate(to, options);
  }, [location]);

  return <Outlet />;
};
