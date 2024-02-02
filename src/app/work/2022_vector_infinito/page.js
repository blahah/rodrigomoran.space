import { Gallery } from "@/components/gallery";
import { ProjectHero } from "@/components/project-hero";
import { VideoCard } from "@/components/video-card";

const project = 'work/2022_vector_infinito'

const description = `
Vector Infinito is a metaphysical vehicle born from the echoes of a timeless question: “why does anything exist?”.

Drawing upon the constant presence of geometric perfection that lies at the core of the microscopical scales and extends to the systems and proportions at the planetary levels, this installation seeks to illuminate the patterns and structures that underlie the fabric of reality, inviting us to delve into an immersive sensory experience in an enthralling and expansive environment of light and order.

Vector Infinito aims to expand our understanding of reality by utilizing the common languages of the universe: mathematics, geometry, and frequency, inviting us to explore the deeper layers that exist beyond our current perception.

The geometric body that shapes this installation, the snub cube, has been extensively studied in relation to its connections to string theory, a theoretical framework in physics that attempts to unify all known fundamental forces of nature and proposes the idea that there might be not only 3 dimensions of space, but up to 11, which may be curled up or compactified in such a way that we cannot directly observe them.

The snub cube can be “wrapped” in a higher-dimensional space in such a way that its edges form the shape of a Calabi-Yau manifold, which is a mathematical object that provides a way to compactify the extra dimensions of space and is crucial to this theory. By studying the properties of the snub cube among other geometric shapes, physicists can gain insights into the nature of the universe at its most fundamental level. This is, for the artist, one of the most interesting aspects of this particular shape.

This endless environment invites us to imagine and contemplate our place in the vast expanse in which we take part and to behold the intrinsic harmony that permeates every aspect of reality.
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
        url="https://www.youtube.com/embed/nwTjnOTm8_8?si=6ghgy5JS2AArhUVw"
        title="Vector Infinito teaser"
      />
      <VideoCard
        url="https://www.youtube.com/embed/iurlZujnioY?si=XvxPO3c-Cy-Hzb79"
        title="Vector Infinito 360º panning"
      />
      <Gallery project={project} n={8}/>
    </>
  );
}
