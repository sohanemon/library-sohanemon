import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className='flex shadow-md sticky top-0 z-30  bg-white justify-between px-6 text-lg font-semibold items-center '>
        <Link href='/'>
          <a className='p-2'>
            <img
              src='https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/60349837_2330788953876010_1663721454019018752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=stYJg8WqMccAX8U3jy2&tn=NINS3E49KtkDJG59&_nc_ht=scontent-sin6-4.xx&oh=00_AT-fZC6SXhW0igVxGZUj7hgvi04vlwiDmVoLcqRB5HLnAw&oe=62BACDD0'
              alt='logo'
              className=' w-12 h-14'
            />
          </a>
        </Link>

        <ul className='flex gap-3'>
          <li
            className={`nav-item  ${router.pathname === "/" && "nav-active"}`}
          >
            <Link href='/'>
              <a>All books</a>
            </Link>
          </li>
          <li
            className={`nav-item   ${
              router.pathname === "/new" && "nav-active"
            }`}
          >
            <Link href='/new'>
              <a>Add book</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
