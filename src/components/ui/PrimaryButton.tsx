// // ReusableButton.tsx

// import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
// import classNames from "classnames";

// interface ReusableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   icon?: ReactNode;
//   text: string;
// }

// const PrimaryButton = forwardRef<HTMLButtonElement, ReusableButtonProps>(
//   ({ icon, text, className, disabled, ...props }, ref) => {
//     return (
//       <button
//         ref={ref}
//         className={classNames(
//           "flex items-center justify-center px-4 py-2 rounded transition-colors duration-200 ease-in-out",
//           {
//             "bg-blue-500 text-white hover:bg-blue-600": !disabled,
//             "opacity-50 cursor-not-allowed": disabled,
//           },
//           className
//         )}
//         disabled={disabled}
//         {...props}
//       >
//         {icon && <span className="mr-2">{icon}</span>}
//         {text}
//       </button>
//     );
//   }
// );

// PrimaryButton.displayName = "PrimaryButton";

// export default PrimaryButton;


// ReusableButton.tsx
// ReusableButton.tsx

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import classNames from "classnames";

interface ReusableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  text?: string | number; // Make text optional
  badge?: number; // Add badge property
}

const PrimaryButton = forwardRef<HTMLButtonElement, ReusableButtonProps>(
  ({ icon, text, badge, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "flex items-center justify-center px-4 py-2 rounded transition-colors duration-200 ease-in-out relative", // Add relative for badge positioning
          {
            "bg-blue-500 text-white hover:bg-blue-600": !disabled,
            "opacity-50 cursor-not-allowed": disabled,
          },
          className
        )}
        disabled={disabled}
        {...props}
      >
        {icon && <span className={text ? "mr-2" : ""}>{icon}</span>}
        {text && <span>{text}</span>}
        {badge !== undefined && (
          <span
            className="absolute -top-1 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
          >
            {badge}
          </span>
        )}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
