import { BsPostcard } from "react-icons/bs"
import { FaUsers } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { NavButton } from "../nav-button"

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5">
        <li>
          <NavButton href="/" icon={<BsPostcard />}>
            Posts
          </NavButton>
        </li>
        <li>
          <NavButton href="following" icon={<FiUsers />}>
            Subscriptions
          </NavButton>
        </li>
        <li>
          <NavButton href="followers" icon={<FaUsers />}>
            Subscribers
          </NavButton>
        </li>
      </ul>
    </nav>
  )
}
