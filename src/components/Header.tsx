import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isBaseRoute = location.pathname === ROUTES.HOME;

  return (
    <>
      <header className="relative flex h-[100px] select-none items-center justify-center bg-black">
        {!isBaseRoute && (
          <Button
            variant="ghost"
            className="absolute left-4 text-white"
            onClick={() => navigate(ROUTES.HOME)}
          >
            <CaretLeftIcon className="h-6 w-6" />
          </Button>
        )}

        <h1 className="text-2xl font-bold text-white">Kodo's Nest</h1>

        <div className="absolute right-0 top-0 hidden h-full w-1/3 sm:block">
          <img
            src="/src/assets/kodo.png"
            alt="Header Image"
            className="z-2 absolute h-full w-full object-cover"
          />

          <div className="absolute h-full w-full bg-gradient-to-r from-black from-0% via-10% to-transparent" />
        </div>
      </header>

      <Outlet />
    </>
  );
};
