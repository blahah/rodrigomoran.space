import { Gallery } from "@/components/gallery";
import { ProjectHero } from "@/components/project-hero";
import { VideoCard } from "@/components/video-card";

const project = 'work/2023_harmonic_pulse'
const description = `
Harmonic Pulse is an immersive art installation that invites into a journey of instrospeciton and self-exploration. As the viewer enters the room, they will listen the deep and rythmic soud of a heatbeat in high deinition audio. At the same time, cymatic geometries in motion are projected full size in the 4 walls of the room. These mesmerizing patterns originate from the heart frequencies of the installation's viewers themselves.

In the center of the room, they will find a digital stethoscope, which they can place upon their chest. The stethoscope is connected to the sound system, amplifying the rhythmic melodies of the viewer's own heartbeat and creating a deeply immersive and intimate ambiance.

Adjacent to the stethoscope, a specially modified 18-inch subwoofer cone holds a pool of water that responds to the vibrations, generating intricate cymatic patterns. These patterns, derived from the viewers' own heartbeat frequencies, form precise geometries that reflect the inherent harmony present in the fundamental levels of reality. The patterns are recorded and projected in real time onto the walls of the room.
`

export default function Page() {
  return (
    <>
      <ProjectHero
        title="Harmonic Pulse"
        description={description}
        year="2023"
      />
      <VideoCard
        url="https://www.youtube.com/embed/c4tkN2QT300?si=8PYw25YcHcPV0n7y"
        title="Harmonic Pulse"
      />
      <Gallery project={project} n={3}/>
    </>
  );
}

