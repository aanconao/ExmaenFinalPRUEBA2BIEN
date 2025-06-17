import { FunctionComponent } from "preact";
import { HarryPotterData } from "../types.ts";

type Props = {
  character: HarryPotterData;
};

const CharacterCard: FunctionComponent<Props> = ({ character }) => {
  return (
    <a
      href={`/characters/${character.id}`}
    >
      <div>
        <img src={character.image} alt={character.name} width={150} />
        <div>{character.name}</div>
      </div>
    </a>
  );
};

export default CharacterCard;
