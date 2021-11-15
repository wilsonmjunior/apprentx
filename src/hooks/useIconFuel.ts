import { Energy, Gasoline } from "../assets/icons";

interface Props {
  name: string
}

export function useIconFuel({name}: Props) {
  switch (name) {
    case 'gasoline':
      return Gasoline
    default:
      return Energy
  }
}