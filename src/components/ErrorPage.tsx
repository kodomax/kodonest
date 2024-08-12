import { useNavigate } from "react-router-dom";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { Button, Header } from "@/components";
import { ROUTES } from "@/constants/routes";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-bold">Oops!</h1>
        <p>No such page exists.</p>
        <Button
          variant="outline"
          className="mt-4 flex gap-1"
          onClick={() => navigate(ROUTES.HOME)}
        >
          <CaretLeftIcon className="h-5 w-5" />
          Return to main page
        </Button>
      </div>
    </>
  );
};
