import { ChevronRight } from "lucide-react";


const Header = ({title}:{title:string}) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 my-12 text-start">
        {title}
      </p>
      <ChevronRight className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 my-12 text-start" />
    </div>
  );
};

export default Header;
