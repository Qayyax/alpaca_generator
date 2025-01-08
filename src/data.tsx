export const alpacaObjects = {
  accessories: ["earings", "flower", "glasses", "headphone"],
  ears: ["default", "tilt-backward", "tilt-forward"],
  eyes: ["default", "angry", "naughty", "panda", "smart", "star"],
  hair: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
  leg: [
    "default",
    "bubble-tea",
    "cookie",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ],
  mouth: ["default", "astonished", "eating", "laugh", "tongue"],
  neck: ["default", "bend-backward", "thick"],
  backgrounds: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70",
  ],
};

export type AlapacaKey = keyof typeof alpacaObjects;
export type AlapacaType = {
  accessories?: string;
  ears?: string;
  eyes?: string;
  hair?: string;
  leg?: string;
  mouth?: string;
  neck?: string;
  backgrounds?: string;
};
