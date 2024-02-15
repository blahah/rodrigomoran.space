import { Gallery } from "@/components/gallery";
import { ProjectHero } from "@/components/project-hero";
import { VideoCard } from "@/components/video-card";

const project = 'work/2022_dance_of_the_elements'

const description = `
Shadow Work is a kinetic sculpture crafted from iron and designed to engage viewers in a dance of light and shadow.

It combines the strength and sobriety of the steel and the lightness of its image reflection, intertwining a variety of details in its projection.

The sculpture's plates are intended to be manipulated by the viewer to generate an array of intricate shapes and patterns.

As light falls upon the sculpture, the viewer's interaction with the plates creates a dynamic interplay of contrasts, with the Moiré effect adding additional layers of complexity to the visual experience.

The artist's fascination with light, harmony, and visual effect is manifested in the sculpture's design. The proportions of the sculpture's frame, arranged in accordance with the harmonic proportion of the Golden Ratio, create a sense of balance, while the viewer's manipulation of the plates constantly introduces an element of chance and unpredictability.
`

export default function Page() {
  return (
    <>
      <ProjectHero
        title="Vector Infinito"
        description={description}
        year="2022"
      />
      <VideoCard
        url="https://richardsmith404.wistia.com/medias/mvgillmh21"
        title="SHADOW WORK"
      />
      <Gallery project={project} n={4}/>
    </>
  );
}
