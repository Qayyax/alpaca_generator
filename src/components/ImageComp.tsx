import { toJpeg } from "html-to-image";
import { useCallback, useRef } from "react";
import ImageDisplay from "./ImageDisplay";
import { AlapacaType } from "../data";
import Random from "./Random";
import Download from "./Download";

type Prop = {
  selected: AlapacaType;
  random: () => void;
};

export default function ImageComp({ selected, random }: Prop) {
  // https://freedium.cfd/https://medium.com/react-courses/save-react-component-as-png-jpeg-or-pdf-bdd626184693
  const ref = useRef<HTMLDivElement>(null);
  const downloadJpg = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "alpaca.jpg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div ref={ref}>
          <ImageDisplay selected={selected} />
        </div>
        <div className="flex items-center justify-around">
          <Random random={random} />
          <Download downloadJpg={downloadJpg} />
        </div>
      </div>
    </>
  );
}
