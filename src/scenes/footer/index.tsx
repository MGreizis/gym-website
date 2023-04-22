import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Laboris sint do laborum nostrud elit ea esse qui officia anim labore
            ut magna. Magna ullamco consequat fugiat eiusmod sunt velit Lorem
            exercitation. Anim non in pariatur qui ullamco amet fugiat
            incididunt adipisicing.
          </p>
          <p>© EVOGYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Ex ex anim qui sunt</p>
          <p className="my-5">Nulla labore nostrud</p>
          <p>Esse consectetur</p>
        </div>
        <div className="my-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus mattis risus elit ullamco velit.</p>
          <p>+37129839048</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
