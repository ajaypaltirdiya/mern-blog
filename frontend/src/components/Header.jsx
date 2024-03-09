import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link,useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const pathname = useLocation().pathname;
  return (
    <Navbar fluid  border className='shadow'>
    
    <Navbar.Brand as={'div'}>
        <Link to='/'>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Blogs</span>
      </Link>
    </Navbar.Brand>
    <form className='ml-auto md:mr-8'>
        <TextInput type='text' placeholder='Search...' className='hidden md:inline-block' rightIcon={CiSearch}/>
    </form>
    <Button className='w-[40px] h-[40px] mr-3 md:hidden' pill color='gray'>
        <CiSearch/>
    </Button>

    

    <div className="flex md:order-2">
        <Button className='px-2 mr-2 hidden sm:inline-block h-[40px] w-[40px] text-center' color='gray' size={30} pill>
            <FaMoon className='justify-center ml-1'/>
        </Button>
        <Link to='/sign-in' className='mr-4'><Button gradientDuoTone='purpleToBlue' outline >Sign In</Button></Link>
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse className=' md:mr-8'>
      <Navbar.Link  as={'div'} active={pathname === '/'}>
        <Link to="/"> Home</Link>
       
      </Navbar.Link>
      <Navbar.Link as={'div'}   active={pathname === '/about'}><Link to="/about">About</Link></Navbar.Link>
      <Navbar.Link as={'div'}   active={pathname === '/project'}><Link to="/project">Projects</Link></Navbar.Link>
      <Navbar.Link  as={'div'}  active={pathname === '/profile'}><Link to="/profile">Profile</Link></Navbar.Link>
    </Navbar.Collapse>

  </Navbar>
  )
}

export default Header