


import { getUserInfo } from "@/services/authServices";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOutIcon, User } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import { logoutUser } from "@/services/actions/logOutUser";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const AuthButton = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user info on the client side
    const userInfo = getUserInfo();
    setUser(userInfo);
  }, []);

  const handleLogout = () => {
    logoutUser(router);
    toast.warning("User logged out successfully");
  };

  return (
    <div className="flex items-center gap-2">
      {user?(
        <div>
          <PrimaryButton
            onClick={handleLogout}
            icon={<LogOutIcon className="h-5 w-5" />}
            text="Logout"
            className="bg-red-500 hover:bg-red-600"
          />
        </div>
      ) : (
        <div>
          <Link href="/login">
            <PrimaryButton
              icon={<User className="h-5 w-5" />}
              text="Login"
              className="bg-blue-500 hover:bg-blue-600"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthButton;

