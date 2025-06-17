import { Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";
import { HarryPotterData } from "../types.ts";
import axios from "npm:axios"; // Esto es importante en Deno: especifica que viene de NPM

export const handler: Handlers<HarryPotterData[]> = {
  async GET(_req, ctx) {
    const res = await axios.get<HarryPotterData[]>(
      "https://hp-api.onrender.com/api/characters",
    );
    const data = res.data;
    return ctx.render(data);
  },
};

export default function Page(props: PageProps<HarryPotterData[]>) {
  return <Characters characters={props.data} />;
}
