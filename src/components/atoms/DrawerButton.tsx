import { useNavigate } from "react-router"

const DrawerButton = ({ name, link }: { name: string, link: string }) => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(link)} className="btn">{name}</button>
  )
}

export default DrawerButton
