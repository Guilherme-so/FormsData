import { useRouter } from "next/router";
import { Check} from "phosphor-react";
import { useEffect, useState } from "react";
import { StyledHeader } from "./styled";

export default function MultiStep() {
  const router: any = useRouter()?.query?.parte;
  const [selected, setSelected] = useState(1);

  const { push } = useRouter();

  useEffect(() => {
    if (router !== undefined) {
      setSelected(router);
    }
  }, [router]);

  const buttonPrev = (index: number) => {
    if (router > index) {
      setSelected(index);
      push(`/instrucoes/?parte=${index}`);
    }
  };

  return (
    <StyledHeader>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={`stepepr${index}`}
          className={`${selected >= index + 1 && "selected"}`}
          onClick={() => buttonPrev(index + 1)}
        >
          {selected > index + 1 ? (
            <>
            {
              <Check className="circleEmoji" size={25} />
            }
            </>
          ) : (
            <span>{index + 1}</span>
          )}
        </div>
      ))}
    </StyledHeader>
  );
}
