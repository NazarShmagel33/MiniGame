import React from 'react'

const Header = () => {
    return (
        <div className=" bg-slate-600">
            <div className="container mx-auto flex justify-between p-3">
                <div>
                    <h2 className="text-3xl font-black text-white">MiniGame</h2>
                </div>

                <div>
                    <nav className="flex  justify-center gap-2">
                        <li className="text-xl font-medium text-white">
                            <a href="#" className="uppercase">
                                Почати гру
                            </a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
