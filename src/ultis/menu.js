import icons from "./icons"

const { MdOutlineLibraryMusic} = icons
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
        icon: <MdOutlineLibraryMusic size={24}/>,
    },
    {
        path: 'zing-chart',
        text: "#zing-Chart",
        icon: <MdOutlineLibraryMusic size={24}/>,
    },
    {
        path: 'follow',
        text: "Theo dõi",
        icon: <MdOutlineLibraryMusic size={24}/>,
    },
]