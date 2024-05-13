import Acessos from "@/components/Acessos";
import Ferramentas from "@/components/Ferramentas";
import ContextPages, { contextPages } from "@/context/ContextPages";
import { useContext } from "react";

export default function Home() {
  const { currencyPage } = useContext(contextPages)
  return(
    <>
      <ContextPages>
        { currencyPage === 'acessos' && <Acessos/> }
        { currencyPage === 'ferramentas' && <Ferramentas/> }
      </ContextPages>
    </>
  )
}
