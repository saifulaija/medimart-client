import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import classNames from "classnames";

// Define a type that includes all the button props and the 'loading' prop
interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  children: ReactNode;
}

// Use forwardRef to allow passing a ref to the button
const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading, disabled, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={loading || disabled}
        className={classNames(
          "inline-flex items-center justify-center transition-colors duration-200 ease-in-out",
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="size-5 animate-spin mr-2" />}
        {children}
      </button>
    );
  }
);

LoadingButton.displayName = "LoadingButton"; // for better debugging and React DevTools

export default LoadingButton;
