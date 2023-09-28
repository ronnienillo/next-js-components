import Link from "next/link";
import { BsCardList } from "react-icons/bs";

const Nav = () => {
    return (
        <Link href={'/'} className="text-xl flex items-center gap-2 mb-5"><BsCardList size={30} /> Back to directory</Link>
    );
}
 
export default Nav;