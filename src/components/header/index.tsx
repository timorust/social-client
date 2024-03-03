import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"
import { useContext } from "react"
import { CiLogout } from "react-icons/ci"
import { FaRegMoon } from "react-icons/fa"
import { LuSunMedium } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout, selectIsAuthenticated } from "../../features/user/userSlice"
import { ThemeContext } from "../theme-provider"

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("token")
    navigate("/auth")
  }

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Social</p>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem
            className="lg:flex text-3xl cursor-pointer"
            onClick={() => toggleTheme()}
          >
            {theme === "light" ? <FaRegMoon /> : <LuSunMedium />}
          </NavbarItem>

          <NavbarItem>
            {isAuthenticated && (
              <Button
                color="default"
                variant="flat"
                className="gap-2"
                onClick={handleLogout}
              >
                <CiLogout />
                <span>Logout</span>
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
