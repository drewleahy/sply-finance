
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface AuthErrorProps {
  message?: string;
}

export const AuthError = ({ message }: AuthErrorProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const errorMessage = message || searchParams.get("error") || "An error occurred during authentication.";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-noto-serif-ethiopic">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-600 font-montserrat">Authentication Error</h2>
        <p className="text-center text-gray-600 mb-6 font-noto-serif-ethiopic">{errorMessage}</p>
        <div className="flex justify-center">
          <Button onClick={() => navigate("/auth")} className="font-montserrat">Return to Sign In</Button>
        </div>
      </div>
    </div>
  );
};
