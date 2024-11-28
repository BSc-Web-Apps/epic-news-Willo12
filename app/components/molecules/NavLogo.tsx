import { Link } from '@remix-run/react';
import logo from '~/assets/svg/logoTest.svg'

interface LogoProps {
  linkDestination?: String;
}

function NavLogo({ linkDestination = "/", }: LogoProps) {
  return (
    <>
      <Link to={`${linkDestination}`} className="flex w-48 items-center justify-center">
        <div>
          <img className="w-28" src={logo} />
        </div>
      </Link >
    </>
  )
}

export default NavLogo
