
import Link from "next/link";
const ButtonSignin = ({ text = "Get started", }) => {  
  return (
    <Link
      className=" text-black bg-lime-400 border border-teal-600 box-shadow py-1 px-1 rounded-sm hover "
      href='/'
    >
      {text}
    </Link>
  );
}
export default ButtonSignin;