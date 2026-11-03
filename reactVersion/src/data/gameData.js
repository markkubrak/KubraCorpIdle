// Static game definitions. Pure data: no functions, no React.
// Keys are ids; they are what gets stored in state (and later, in saves).

export const resources = {
  wood: { label: "Wood", skill: "woodcutting" },
  copper: { label: "Copper", skill: "mining" },
  fish: { label: "Fish", skill: "fishing" },
};

export const skills = {
  woodcutting: { label: "Woodcutting", flavor: "The trees speak your name..." },
  mining: { label: "Mining", flavor: "The mines, you yearn for them." },
  fishing: { label: "Fishing", flavor: "White whale, holy grail." },
};
