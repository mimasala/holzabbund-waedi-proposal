import NavButton from "../atoms/NavButton"
import Dropdown from "../atoms/Dropdown"
import { Menu } from "lucide-react"
import DrawerButton from "../atoms/DrawerButton"

const routes = [
  { name: "Startseite", link: "/" },
  { name: "Abbundarbeiten", link: "/abbundarbeiten" },
  { name: "Verkauf", link: "/verkauf" },
  { name: "Planung", link: "/planung" },
  {
    name: "Über uns", link: "/team",
    children: [
      { name: "Lieferanten", link: "/team/lieferanten" },
      { name: "Offene Stellen", link: "offene-stellen" }
    ]
  },
  { name: "Standort", link: "/standort" },
  { name: "Kontakt", link: "/kontakt" },
]


const Navbar = () => {
  return (
    <div className="fixed top-0 z-40 min-w-screen">
      <div className="px-4 pt-2">
        <div className="navbar bg-base-200 shadow-sm flex rounded-md">
          <div className="grow flex justify-start items-center mx-3">
            <img src="/holzabbund-icon.webp" className="h-10" />
            <div className="font-serif font-bold text-xl w-min ml-6">
              <div>Holzabbund</div>
              <div className="mx-10 text-nowrap">Wädenswil AG</div>
            </div>
          </div>
          <div className="lg:flex justify-end hidden ">
            {routes.map((x) => {
              if (x.children) {
                return (
                  <Dropdown name={x.name} link={x.link} color="text-base-content">
                    {x.children.map((child) => <NavButton name={child.name} link={child.link} key={child.name} />)}
                  </Dropdown>
                )
              }
              return <NavButton link={x.link} name={x.name} key={x.name} />
            })}
          </div>
          <div className="lg:hidden mr-3">
            <div className="drawer drawer-end">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex justify-start">
                <label htmlFor="my-drawer" className="btn btn-square btn-outline">
                  <Menu />
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-200 text-base-content min-h-full w-60 p-4 items-start justify-start flex gap-3">
                  <DrawerButton name="Startseite" link="/" />
                  {routes.map((x) => {
                    return <DrawerButton name={x.name} link={x.link} key={x.name} />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
