import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react"
import { useNavigate } from "react-router";


type props = {
  name: string;
  link?: string;
  children: React.ReactNode;
  color: string;
}

const Dropdown = ({ name, link, children, color }: props) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="dropdown dropdown-hover"
      >
        <a onClick={() => link ? navigate(link) : {}}>
          <button
            tabIndex={0}
            role="button"
            className={cn("btn btn-link not-hover:no-underline text-nowrap", color)}>
            {name}
            <ChevronDown className={color} />
          </button>
        </a>
        <ul tabIndex={0} className="dropdown-content bg-base-100  rounded-box z-1 w-52 p-2 shadow-sm">
          {children}
        </ul>
      </div >
    </>
  )
}

export default Dropdown
