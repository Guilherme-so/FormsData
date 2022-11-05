import { RiAdminFill, RiUser3Fill } from "react-icons/ri"
import { MdEdit, MdOutlineClose, MdOutlineWatchLater, MdVisibility } from "react-icons/md"
import { BsPlusLg } from "react-icons/bs"
import { BiLogOut } from "react-icons/bi"
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoMdTrash } from "react-icons/io"
import { IoSettingsSharp } from "react-icons/io5"
import { AiOutlineLike, AiOutlineSearch, AiOutlineWarning } from "react-icons/ai"
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi"


const Icon = {
    Adm: RiAdminFill,
    User: RiUser3Fill,
    Watch: MdOutlineWatchLater,
    Plus: BsPlusLg,
    Close: MdOutlineClose,
    ArrowDown: IoIosArrowDown,
    ArrowRight: IoIosArrowBack,
    ArrowUpRight: FiArrowUpRight,
    ArrowDownRight: FiArrowDownRight,
    ArrowLeft: IoIosArrowForward,
    View: MdVisibility,
    Warning: AiOutlineWarning,
    Like: AiOutlineLike,
    Edit: MdEdit,
    Trash: IoMdTrash,
    LogOut: BiLogOut,
    Setting: IoSettingsSharp,
    Search: AiOutlineSearch
}

export default Icon