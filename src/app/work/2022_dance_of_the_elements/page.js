import { Gallery } from "@/components/gallery";
import { ProjectHero } from "@/components/project-hero";
import { VideoCard } from "@/components/video-card";

const project = 'work/2022_dance_of_the_elements'

const description = `
This video displays the visual outcome of a performance executed by the artist in a previously crafted installation. The installation features a 1.8-meter diameter concave water container placed atop a powerful sound system. When filled with water and illuminated by a strategically positioned light source, the container creates an optical illusion with levitating and intertwining light waves. The video captures the mesmerizing patterns and dancing waves resulting from the artist's exploration of the synthesizer and a small mechanism
controlling the water's movement.

Since ancient times, the elements have held great importance in both scientific and symbolic contexts, representing the connection between nature and the human essence throughout history. In antiquity, our civilization attributed great significance to the belief that everything in nature was composed of the four elements, seeking answers to fundamental questions. While in present-day Western society, the notion of the four elements as the basis of matter is no longer used, some animist cultures continue to attribute special importance to them.

This artwork serves as an experimental exploration of the evolution of knowledge over time and its ephemeral nature. It reflects on what we currently understand and the ever-changing aspects of knowledge, akin to the movement of light waves in the darkness.
`

export default function Page() {
  return (
    <>
      <ProjectHero
        title="Dance of the Elements"
        description={description}
        year="2022"
      />
      <VideoCard
        url="https://www.youtube.com/embed/UY3BSRDl-4g?si=Sxtzvm7bqWItX_MS"
        title="The Dance of the Elements nº1"
      />
      <Gallery project={project} n={6}/>
    </>
  );
}
