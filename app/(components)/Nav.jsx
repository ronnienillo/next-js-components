import Link from "next/link";
import { BsCardList } from "react-icons/bs";

const Nav = () => {
    return (
        <Link href={'/'} className="text-xl flex items-center gap-2 mb-5 justify-end">Back to directory <BsCardList size={30} /></Link>
    );
}
 
export default Nav;