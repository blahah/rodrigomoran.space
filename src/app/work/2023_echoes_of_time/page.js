import { Gallery } from "@/components/gallery";
import { ProjectHero } from "@/components/project-hero";

const project = 'work/2023_echoes_of_time'
const description = [
  `This work is an ethereal journey, where infinite repetitions converge to question the fabric of our reality. In the piece, “Vector Infinito” is warped and repeated to the infinite, unveiling hidden dimensions and generating fractals that adhere to the Fibonacci sequence and other mathematical proportions.`,
  (<i>«This visual piece is accompanied by the song 1956-1977 by Andrey Guryanov, that explores the history and sonic essence of the Soviet Union's historical trajectory. In contrast, my work delves into the question of what reality is made of and, ultimately, how we engage with it. I have chosen to include this track as a calling for peace, once again.»</i>),
  `Echoes of Time beckons the viewer to reflect on our existence and embrace the path towards peace amidst a world at
  odds.`
]

export default function Page() {
  return (
    <>
      <ProjectHero
        title="Echoes of Time"
        description={description}
        year="2023"
      />
      <Gallery project={project} n={25}/>
    </>
  );
}

