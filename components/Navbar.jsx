import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {

    return (
        <div className="bg-[#DCD5DC] text-[#769ABE] h-[64px] w-full fixed  flex justify-between items-center px-10 shadow">

            <div className="flex items-center gap-6 max-md:gap-3 ">

                <div className="flex items-center gap-1">
                    <Image src="/globe.png" className="bg-white rounded-2xl" width={30} height={30}  alt="globe"/>
                    <p className="text-xl font-bold font-clashDisplay">Tripster</p>
                </div>

                <ul className="flex list-none items-center gap-6 max-md:hidden">

                    <li className="text-base font-medium font-satoshi">Home</li>

                    <li className="text-base font-medium font-satoshi">Blog</li>

                    <li className="text-base font-medium font-satoshi">About</li>

                    <li className="text-base font-medium font-satoshi">Explore</li>

                </ul>
            </div>


            <div className="flex items-center">
            
                <UserButton afterSignOutUrl="/"/>
            </div>

        </div>
    )
}

export default Navbar