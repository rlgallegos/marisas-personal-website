import { Link } from "react-scroll"

function Home(){

    const navItems = [
        {
            id: 1,
            title: 'Video',
            id_name: "video"
        },
        {
            id: 2,
            title: 'Photo',
            id_name: "photo"
        },
        {
            id: 3,
            title: 'About',
            id_name: "about"
        },
        {
            id: 4,
            title: 'Contact',
            id_name: "contact"
        }
    ]
    const navList = navItems.map(item => {
        return <Link to={item.id_name} smooth={true} duration={500} className="text-xl lovelace" >
            <li 
                key={item.id} 
                className="point mx-4 py-3 px-6 bg-transparent rounded border border-transparent 
                hover:border-cblue hover:bg-ccream hover:transform hover:scale-105 transition-all duration-200">
                {item.title}
            </li>
        </Link>
    })

    return <div id="home" className="bg-cbrown block relative">
        <img src="branch.png" alt="branch" className="h-screen absolute opacity-25 transform rotate-45" />
        <h1 className="text-8xl text-bold lovelace w-1/2">Marisa <br/> Kristine <br/> Hernandez</h1>
        <nav className="absolute top-2/3 left-0 translate-x-1/3">
            <ul className="flex justify-between my-2">
                {navList}
            </ul>
        </nav>
    </div>
}
export default Home