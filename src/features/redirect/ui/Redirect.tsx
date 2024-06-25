import { type FC, useCallback, useEffect } from "react";
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

  const navigateFromBadToTarget = useCallback(() => {
    if (location.pathname !== from) {
      return;
    }

    navigate(to, options);
  }, [from, location.pathname, navigate, options, to]);

  useEffect(() => {
    navigateFromBadToTarget();
  }, [location, navigateFromBadToTarget]);

  return <Outlet />;
};
