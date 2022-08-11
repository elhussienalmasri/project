import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
    click:""
  },
  {
    id: 2,
    title: "Blog",
    path: "/b",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBlog />,
    click: (()=>window.location.replace("/b")) && (()=>window.location.reload())
   
  },
  {
    id: 3,
    title: "About",
    path: "/#about",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaParagraph/>,
    click:""
  },
  {
    id: 4,
    title: "Projects",
    path: "/#projects",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaRProject />,
    click:""
  },
  {
    id: 5,
    title: "Skills",
    path: "/#skills",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBook />,
    click:""
  },
  {
    id: 6,
    title: "Contact ",
    path: "/#contact",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
    click:""
   }
 
];
