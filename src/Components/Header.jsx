import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
  } from "@nextui-org/react";
  
  
  const Header = () => {
    return (
      <Navbar
        shouldHideOnScroll
        isBlurred={false}
        className="bg-transparent w-full"
        maxWidth="xl"
      >
        <NavbarBrand>
          <div className="w-screen">
            <img src="logo.png" alt="" />
          </div>
  
          <h3 className="font-bold text-lg sm:text-xl">Wern Finance</h3>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="bordered"
              radius="full"
            >
              Sign Up
            </Button>
          </NavbarItem>
          
        </NavbarContent>
      </Navbar>


    );
  };
  
  export default Header;