import Image from "next/image"
import { useEffect, useState } from "react"
import Menu from "../Menu"
import { StyledLayout, StyledLoading } from "./style"

export default function LayoutDashboard({children}:any) {

    // function renderContent() {
        return (
            <StyledLayout>
                {/* <Warning /> */}
                <Menu />
                {children}
            </StyledLayout>
        )
    // }

    // function renderLoading() {
    //     return (
    //         <StyledLoading>
    //             <Image src="/images/loading.gif" width={200} height={200} priority />
    //         </StyledLoading>
    //     )
    // }
    
    // if(auth === false) {
    //     return renderLoading()
    // }else {
    //     return renderContent()
    // }
}