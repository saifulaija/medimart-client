// ReusableButton.tsx

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import classNames from "classnames";

interface ReusableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  text: string;
}

const PrimaryButton = forwardRef<HTMLButtonElement, ReusableButtonProps>(
  ({ icon, text, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "flex items-center justify-center px-4 py-2 rounded transition-colors duration-200 ease-in-out",
          {
            "bg-blue-500 text-white hover:bg-blue-600": !disabled,
            "opacity-50 cursor-not-allowed": disabled,
          },
          className
        )}
        disabled={disabled}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
