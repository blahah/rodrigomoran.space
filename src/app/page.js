'use client';

import { ImageCard } from '@/components/image-card';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-wrap flex-col md:flex-row lg:flex-row w-full">
      <ImageCard
        imgUrl="/work/2021_organic_light_vector/title.jpg"
        linkUrl="/work/2021_organic_light_vector"
        caption="_ORGANIC LIGHT VECTOR [2021]"
      />
      <ImageCard
        imgUrl="/work/2020_soil_and_water/title.jpg"
        linkUrl="/work/2020_soil_and_water"
        caption="_SOIL_AND_WATER [2020]"
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


