import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledHeader } from "./style";


export default function Header() {
    const router: any = useRouter()?.query?.parte 
    const [selected, setSelected] = useState(1)

    const { push} = useRouter();

    console.log(router)

    useEffect(() => {
        if(router !== undefined){
            setSelected(router)
        }        
    }, [router])

    const buttonPrev = (index: number) => {
        if(router > index){
            setSelected(index)
            push(`/formulario/?parte=${index}`)
        }
    }

    const buttonNext = (index: number) => {
        if(router < index){
            setSelected(index)
            push(`/formulario/?parte=${index}`)
        }
    }


    return (
        <StyledHeader>
           {Array.from({length: 4}).map((_, index) =>(
            <button  key={`nav${index}`}
                className={`${selected == index+1 && "selected"}`}
                onClick={() => {
                    buttonPrev(index+1)
                    buttonNext(index+1)
                }}
            >Parte {index+1}</button>
           ))}
        </StyledHeader>
    )
}