import RunIcon from "assets/icons/Run.svg";
import WorldIcon from "assets/icons/World.svg";
import PracticeIcon from "assets/icons/Practice.svg";

export const gamemodes = [
  {
    name: "Practicar",
    url: "practice",
    isDisabled: false,
    description:
      "Practica carreras ilimitadamente, no es necesario que inicies sesión.",
    icon: PracticeIcon.src,
    requiresUser: false,
  },
  {
    name: "Correr",
    url: "race",
    isDisabled: false,
    description:
      "Registra todas tus carreras, necesitas iniciar sesión para jugar.",
    icon: RunIcon.src,
    requiresUser: true,
  },
  {
    name: "Campeonato",
    url: "championship",
    isDisabled: true,
    description: "Este modo de juego estará disponible próximamente.",
    icon: WorldIcon.src,
    requiresUser: false,
  },
];

export const cardAnimations = {
  cardHovered: {
    scale: [1.05, 1, 0.95, 1],
    transition: { duration: 0.5 },
  },
};
