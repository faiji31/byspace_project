import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "Explore": [
    "Featured Courses",
    "Featured Categories",
    "Business",
    "IT",
    "Design",
  ],

  "Categories": [
    "Development",
    "Marketing",
    "Photography",
    "Finance",
    "Sport",
  ],

  "Company": [
    "Become a Creator",
    "Affiliate Program",
    "Contact",
    "Help",
    "About",
  ],
};

 const Footer=()=> {
  return (
    <footer className="w-full bg-white">

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-14">

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

     
          <div>

          <div className="flex gap-2 items-center" >
             <Image  src={'/assets/logo.png' } alt="" height={40} width={40}></Image>
             <h3 className="text-[20px] font-bold">ByteSpace</h3>
          </div>


      
            <p className="mt-3 max-w-[310px] text-[8px] leading-4 text-black">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>


        
            <form className="mt-7 flex max-w-[295px] items-center gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-[31px]
                  w-full
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  px-4
                  text-[9px]
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  focus:border-[#c7ff00]
                "
              />

              <button
                type="submit"
                className="
                  h-[31px]
                  shrink-0
                  rounded-full
                  bg-[#c7ff00]
                  px-4
                  text-[9px]
                  font-medium
                  text-gray-900
                  transition
                  hover:bg-[#baff00]
                "
              >
                Search
              </button>

            </form>


        
            <p className="mt-4 max-w-[300px] text-[7px] leading-3 text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>

          </div>


      

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>

              <h3 className="text-[8px] font-medium text-gray-900">
                {title}
              </h3>

              <ul className="mt-3 space-y-3">

                {links.map((link) => (
                  <li key={link}>

                    <Link
                      href="#"
                      className="
                        text-[8px]
                        text-gray-500
                        transition
                        hover:text-gray-900
                      "
                    >
                      {link}
                    </Link>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>


        <div className="mt-16 border-t border-gray-200" />


  
        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">


          <p className="text-[9px] text-gray-500">
            © 2023 ByteSpace. All rights reserved.
          </p>


          {/* Bottom Links */}
          <div className="flex flex-wrap items-center gap-5">

            <Link
              href="#"
              className="text-[9px] text-gray-500 hover:text-gray-900"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-[9px] text-gray-500 hover:text-gray-900"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="text-[9px] text-gray-500 hover:text-gray-900"
            >
              Cookies Settings
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer