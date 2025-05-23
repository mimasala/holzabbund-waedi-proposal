import { useNavigate } from "react-router"

const NavButton = ({ name, link }: { name: string, link: string }) => {
  const navigate = useNavigate()
  return (
    <button className="btn btn-link not-hover:no-underline text-base-content" onClick={() => navigate(link)} >{name}</button>
  )
}

export default NavButton
