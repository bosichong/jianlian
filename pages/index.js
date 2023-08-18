import Image from 'next/image'
import {Inter} from 'next/font/google'
import {useEffect, useState} from "react";
import links from '../data';
import Link from "next/link"; // 导入您的data.js文件

const inter = Inter({subsets: ['latin']})
// console.log(data)

export default function Home() {

    const [show, setShow] = useState(true)
    function hanleClick(){
        setShow(!show)
    }
    const handleScreenLessThan640 = () => {
        if (window.innerWidth < 768) {
            setShow(!show);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            // Update the show state based on window width
            setShow(window.innerWidth >= 768);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <main className={`overflow-hidden relative w-full h-screen flex z-0`}>
                <div className={`fixed z-20 top-0 left-0 flex-shrink-0 h-full overflow-x-hidden bg-gray-900 ${show ? '':'hidden'}`} id={`leftnav`}>
                    <div className={`h-screen w-[260px]`}>
                        <div className={`text-white relative h-full w-full flex-1 items-start border-white/20`}>
                            <nav className={`flex h-full w-full flex-col p-2`}>
                                <div className="mb-1 flex justify-center items-center gap-2" id={`apptop`}>
                                    <div className="flex justify-center items-center">
                                        <h1 className={`text-2xl`}>极 简 导 航</h1>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-hidden hover:overflow-auto" id={`appcontent`}>
                                    <div className={`pr-2`}>
                                        <div className="flex flex-col justify-between ">
                                            <ul className="space-y-1">
                                                {
                                                    links.map(({id,data})=>(
                                                        <li key={id}>
                                                            <details
                                                                className="group [&_summary::-webkit-details-marker]:hidden">
                                                                <summary
                                                                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                                >
                                                                    <span className="text-sm font-medium"> {id} </span>

                                                                    <span
                                                                        className="shrink-0 transition duration-300 group-open:-rotate-180"
                                                                    >
                                                                                  <svg
                                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                                      className="h-5 w-5"
                                                                                      viewBox="0 0 20 20"
                                                                                      fill="currentColor"
                                                                                  >
                                                                                    <path
                                                                                        fillRule="evenodd"
                                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                                        clipRule="evenodd"
                                                                                    />
                                                                                  </svg>
                                                                                </span>
                                                                </summary>

                                                                <ul className="mt-2 space-y-1 px-4">
                                                                    {
                                                                        data.map(({id,item})=>(
                                                                            <li key={id}>
                                                                                <a
                                                                                    href={`#${id}`} onClick={handleScreenLessThan640}
                                                                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                                                >
                                                                                    {id}
                                                                                </a>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </details>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-1 flex flex-row justify-center items-center gap-2" id={`appbottom`}>
                                    <Link href={`https://github.com/Jsky2020/`}>Designed by JianLian</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={`z-10 top-0 mt-0 h-full overflow-y-scroll flex-1`} id={`show`} style={{position: 'absolute', width: show ? 'calc(100% - 270px)' : '100%',left: show ? '270px' : '0px' }}>
                    <div className={`p-2 mt-8 md:p-4`}>
                            {
                                links.map(({id,data}) => (
                                    <div key={id}>
                                        {
                                          data.map(({id, data})=>(
                                              <div key={id} className={`my-4`}>
                                                  <h3 id={id} className={`mb-2 text-sm`}>{id}</h3>
                                                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5 2xl:grid-cols-6 2xl:gap-6">
                                                  {
                                                      data.map(({id, link})=>(

                                                          <Link key={id} href={link} target={"_blank"}  className="h-10 rounded-md bg-gray-100 text-center leading-10 shadow-sm transition hover:bg-black hover:text-white my-4 hover:animate-bounce">
                                                                  {id}
                                                          </Link>

                                                      ))
                                                  }
                                                  </div>
                                              </div>
                                          ))
                                        }
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                <div className={`fixed z-30 top-2  h-8 flex justify-center items-center`} style={{ left: show ? '270px' : '0px' }}>
                    <button type="button" onClick={hanleClick}
                            className="ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            tabIndex="0">
                        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"
                             strokeLinecap="round" strokeLinejoin="round"
                             className={`h-6 w-6 ${show ? '':'hidden'}`}
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-menu-2 ${show ? 'hidden':''}`}
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 6l16 0"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M4 18l16 0"></path>
                        </svg>
                    </button>
                </div>
            </main>


        </div>
    )
}

