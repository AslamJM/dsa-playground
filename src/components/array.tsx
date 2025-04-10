import { useMemo } from "react";
import ArrayBox from "./array-box";

type Props = {
  length: number;
};

export default function ArrayComp({ length }: Props) {
  const boxIndexes = useMemo(() => {
    return Array.from({ length }, (_, i) => i + 1);
  }, [length]);

  return (
    <div className="flex">
      {boxIndexes.map((index) => (
        <ArrayBox index={index} key={index} />
      ))}
    </div>
  );
}
