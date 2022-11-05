import Header from "../Header";
import { StyledLayout } from "./style";


export default function Layout({children}:any) {
    return (
        <StyledLayout>
            <Header />
            {children}
        </StyledLayout>
    )
}