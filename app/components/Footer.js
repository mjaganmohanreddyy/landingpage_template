import Image from "next/image"
import logo from "@/icons/hornicon.svg";

export default function Footer(){
    return(
        <section  id="footer" className=" px-5 lg:px-10 py-3 pt-10">
            <div className="max-w-5xl mx-auto pb-5">
                <div className="flex items-center justify-between gap-x-5">
                    <div className="header-logo flex items-center space-x-2">
                    <Image
              src={logo}
              alt="Marketing Hub"
              className="w-8"
              priority={true}
              width={32}
              height={32}
            />
          <h2 className="text-black font-bold text-base">MarketingHub</h2>
          </div>
          <div className="flex items-center justify-end w-full pl-10"><div>
         <ul className="flex items-center justify-center gap-x-10 text-blac text-sm">
        <li>
       <a href="#">Privacy Policy</a>
        </li> 
        </ul>
         </div>
          </div>
         </div>
         </div>
         </section>
    )
}