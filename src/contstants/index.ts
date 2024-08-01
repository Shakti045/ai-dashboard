import { RiAiGenerate ,RiExchangeDollarLine } from "react-icons/ri";
import { MdSlowMotionVideo , MdOutlineDataUsage ,MdOutlineBrandingWatermark } from "react-icons/md";
import { TbLibrary ,TbBrandDiscord } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IconType } from "react-icons";


export interface SideBarItem {
    id: number;
    title: string;
    icon: IconType;
    route?: string;
    sublinks?:{
        id: number;
        title: string;
        route: string;
    }[]
}

export const sideBarItems:SideBarItem[] = [
    {
        id:1,
        title: 'Generate New Video',
        icon: RiAiGenerate,
        route:'/'
    },
    {
        id:2,
        title:'Explore',
        icon: MdSlowMotionVideo,
        route:'/'
    },
    {
        id:3,
        title:'Library',
        icon: TbLibrary,
        sublinks:[
            {
                id:11,
                title:'History Of Pyramids',
                route:'/'
            },
            {
                id:12,
                title:'Future of Ai Industry',
                route:'/'
            }
        ]
    },
    {
        id:4,
        title:'Brading',
        icon: MdOutlineBrandingWatermark,
        route:'/'
    },
    {
        id:5,
        title:'Affiliate',
        icon: RiExchangeDollarLine,
        sublinks:[
            {
                id:51,
                title:'Referal Plan',
                route:'/'
            }
        ]
    },
    {
        id:6,
        title:'Usage',
        icon:MdOutlineDataUsage,
        route:'/'
    },
    {
        id:7,
        title:'Feature Request',
        icon:HiOutlineLightBulb,
        route:'/'
    },
    {
        id:8,
        title:'Join Discord',
        icon:TbBrandDiscord,
        route:'/'
    }
]