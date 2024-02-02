'use client';

import { ImageCard } from '@/components/image-card';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-wrap flex-col md:flex-row lg:flex-row w-full">
      <ImageCard
        imgUrl="/work/2023_echoes_of_time/title.jpg"
        linkUrl="/work/2023_echoes_of_time"
        caption="_ECHOES OF TIME [2023]"
      />
      <ImageCard
        imgUrl="/work/2023_harmonic_pulse/title.jpg"
        linkUrl="/work/2023_harmonic_pulse"
        caption="_HARMONIC PULSE [2023]"
      />
      <ImageCard
        imgUrl="/work/2022_shadow_work/title.jpg"
        linkUrl="/work/2022_shadow_work"
        caption="_SHADOW WORK [2022]"
      />
      <ImageCard
        imgUrl="/work/2022_vector_infinito/title.jpg"
        linkUrl="/work/2022_vector_infinito"
        caption="_VECTOR INFINITO [2022]"
      />
      <ImageCard
        imgUrl="/work/2022_dance_of_the_elements/title.jpg"
        linkUrl="/work/2022_dance_of_the_elements"
        caption="_DANCE OF THE ELEMENTS [2022]"
      />
      <ImageCard
        imgUrl="/work/2018_underground_screens/title.jpg"
        linkUrl="/work/2018_underground_screens"
        caption="_UNDERGROUND_SCREENS [2018]"
      />
      <ImageCard
        imgUrl="/work/2018_meaning_of_life/title.jpg"
        linkUrl="/work/2018_meaning_of_life"
        caption="_MEANING_OF_LIFE [2018]"
      />
      <ImageCard
        imgUrl="/work/2017_interactions/title.jpg"
        linkUrl="/work/2017_interactions"
        caption="_INTERACTIONS [2017]"
      />
    </div>
  );
}


