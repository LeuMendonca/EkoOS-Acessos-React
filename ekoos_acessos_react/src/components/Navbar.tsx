import {  useContext, useState } from "react";
import { Separator } from "./ui/separator";
import { Gear, Plus, SignOut } from "phosphor-react";
import { contextPages } from "@/context/ContextPages";

export default function Navbar() {

    const [ handleCadastro , setHandleCadastro ] = useState<boolean>(false)
    const {setCurrencyPage} = useContext(contextPages)

    return (
        <header>
            <nav className="bg-emerald-500 w-32 flex flex-col h-screen text-sm p-2 font-bold text-zinc-100 justify-between">
                <section>
                    <span className="text-lg">Bom dia</span>
                    
                    <Separator orientation="horizontal"/>

                    <ul className="flex flex-col items-start mt-5 gap-2">
                        <li>
                            <button onClick={() => setCurrencyPage('acessos')}>Acessos</button>
                        </li>
                        <li>
                            <button onClick={() => setCurrencyPage('ferramentas')}>Ferramentas</button>
                        </li>
                    </ul>
                </section>

                <section>
                    <ul className="flex flex-col items-start gap-2">
                        <div className="flex">
                            <li>
                                <button className="flex flex-row gap-1 items-center" onClick={() => setHandleCadastro( state => !state )}><Plus/> Cadastro</button>
                            </li>

                            { handleCadastro &&
                                <ul className="bg-emerald-500 text-zinc-100 absolute ml-[7.7rem] transition-opacity animate-showComponent rounded flex flex-col gap-1 p-2 -translate-y-1/3">
                                    <li className="hover:text-black cursor-pointer transition-colors hover:opacity-100 p-1">Cadastrar Acesso</li>
                                    <li className="hover:text-black cursor-pointer transition-colors hover:opacity-100 p-1">Cadastrar Ferramenta</li>
                                </ul>
                            }
                        </div>

                        <li>
                            <button className="flex flex-row gap-1 items-center"><Gear/> Configurações</button>
                        </li>
                        
                        <li>
                            <button className="flex flex-row gap-1 items-center"><SignOut/>Logoff</button>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    )
}
