import { api } from "@/services/axios"
import { useEffect, useState } from "react"

interface ToolsProps {
  id: number
  titulo: string
  descricao: string
}

export default function Ferramentas() {

  const [ tools , setTools ] = useState<ToolsProps[]>([])

  async function getTools(){
    const response = await api.get('getTools')


    setTools(response.data)
  }

  const handleClickTools = ( event: any ) => {

    const element = event.currentTarget.getElementsByTagName('p')[0]
    element.classList.toggle('hidden')

    if( element.style.maxHeight){
      element.style.maxHeight = null
    }
    else{
      element.style.maxHeight = element.scrollHeight + "px";
    }
  }

  useEffect(() => {
    getTools();
  },[])

  return (
    <main className="flex flex-1 items-start p-5 bg-zinc-900 flex-col">
      <input type="text" placeholder="Busque por um acesso" className="border-[1px] border-slate-400 w-[100%] p-2 pl-2 focus:outline-none bg-transparent rounded-md text-slate-200 mb-5"/>

      <section className="flex flex-1 flex-col w-full text-slate-200 text-sm">

        { tools.map( (tool , index) => (
          
          <div key={`div-${index}`} className="border p-4 rounded-md mt-2" onClick={(event : any) => handleClickTools(event)}>
            <h5>{ tool.titulo}</h5>

            <p className="hidden max-h-0 transition-max-height">
                { tool.descricao }
            </p>
        </div>
        ))}

      </section>
    </main>
  )
}
