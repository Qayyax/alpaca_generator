import { AlapacaType } from "../data";

type Props = {
  selected: AlapacaType;
};
export default function ImageDisplay({ selected }: Props) {
  const accessories = `/alpaca/accessories/${selected.accessories}.png`;
  const ears = `/alpaca/ears/${selected.ears}.png`;
  const eyes = `/alpaca/eyes/${selected.eyes}.png`;
  const hair = `/alpaca/hair/${selected.hair}.png`;
  const leg = `/alpaca/leg/${selected.leg}.png`;
  const mouth = `/alpaca/mouth/${selected.mouth}.png`;
  const neck = `/alpaca/neck/${selected.neck}.png`;
  const nose = `/alpaca/nose.png`;
  const bg = `/alpaca/backgrounds/${selected.backgrounds}.png`;

  return (
    <div
      className="bg-cover relative "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img src={ears} alt={selected.ears} className="absolute top-0 " />
      <img src={eyes} alt={selected.eyes} className="absolute top-0 z-30" />
      <img src={hair} alt={selected.hair} className="absolute top-0 " />
      <img src={leg} alt={selected.leg} className="absolute top-0 " />
      <img src={mouth} alt={selected.mouth} className="absolute top-0 z-20" />
      <img src={neck} alt={selected.neck} className="absolute top-0 " />
      <img src={nose} alt="nose" className="absolute top-0 " />
      <div>
        <img
          src={accessories}
          alt={selected.accessories}
          className="relative z-[100]"
        />
      </div>
    </div>
  );
}
