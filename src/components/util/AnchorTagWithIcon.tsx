import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../icons/icons";

interface AnchorTagWithIconProps {
    href: string;
    text: string;
    icon: React.ComponentType<{ className?: string }>;
    marginTop?:number;
}

export default function AnchorTagWithIcon({ href, text, icon: Icon = ArrowRightIcon,marginTop=2}: AnchorTagWithIconProps) {
  return (
    <div className="flex flex-row hover:text-green-500">
      <Link
        to={href}
        className="underline underline-offset-5 decoration-green-500 decoration-2"
      >
        {text}
      </Link>
      <Icon className={`mt-${marginTop}`} />
    </div>
  );
}
