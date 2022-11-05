import MultiStep from "../MultiStep/multiStep";
import { StyledLayout } from "./style";

export default function LayoutMultiStep({children}:any) {
    return (
        <StyledLayout>
            <MultiStep />
            {children}
        </StyledLayout>
    )
}