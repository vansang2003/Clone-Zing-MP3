import icons from "./icons"

const { 
        MdOutlineLibraryMusic, 
        FaRegDotCircle, 
        RiUserFollowLine,
        FaChartColumn
    } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: "Thư viện",
        icon: <MdOutlineLibraryMusic size={24}/>,
    },
    {
        path: '',
        text: "Khám phá",
        end: true,
        icon: <FaRegDotCircle size={24}/>,
    },
    { 
        path: 'zing-chart',
        text: "#zing-chart",
        icon: <FaChartColumn size={24}/>,
    },
    {
        path: 'follow',
        text: "Theo dõi",
        icon: <RiUserFollowLine size={24}/>,
    },
]