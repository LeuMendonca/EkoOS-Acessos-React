import { api } from "@/services/axios"
import { useEffect, useState } from "react"

interface AcessosProps {
    id: number
    empresa: string
    maquina: string
  }
  
export default function Acessos() {
    const [ acessos , setAcessos ] = useState<AcessosProps[]>([])

    async function getAcessos(){
      const response = await api.get('getAcessos')
  
  
      setAcessos(response.data)
    }
  
    useEffect(() =>{
      getAcessos();
    },[])
  
    return (
      <main className="flex flex-1 items-start p-5 bg-zinc-900 flex-col">
            <input type="text" placeholder="Busque por um acesso" className="border-[1px] border-slate-400 w-[100%] p-2 pl-2 focus:outline-none bg-transparent rounded-md text-slate-200 mb-5"/>
  
            <section className="flex flex-1 flex-col w-full text-slate-200 text-sm">
              <div className="flex w-full border mb-3 p-2 rounded">
                <span className="w-1/4">Id</span>
                <span className="w-1/4">Empresa</span>
                <span className="w-1/4">Máquina</span>
                <span className="w-1/4">Ações</span>
              </div>
  
              <div className="flex flex-col last">
  
                { acessos.map( ( acesso , index ) => (
                  <div key={`item-${index}`} className="flex w-full border border-b-transparent p-2 first:rounded-t-md last:rounded-b-md last:border-b-white h-[3rem]">
                    
                    <span className="w-1/4">{acesso.id}</span>
                    <span className="w-1/4">{acesso.empresa}</span>
                    <span className="w-1/4">{acesso.maquina}</span>
                    <span className="w-1/4">TeamViewer Anydesk</span>
                </div>
                ))}
              </div>
  
              
            </section >
      </main >
    )
}
