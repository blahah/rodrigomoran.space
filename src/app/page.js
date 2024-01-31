'use client';

import { ImageCard } from '@/components/image-card';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col md:flex-row lg:flex-row">
      <ImageCard
        imgUrl="https://rodrigomoran.space/wp-content/uploads/2021/02/IMG_6219-768x512.jpg"
        linkUrl="/project-1"
        caption="_PROJECT X15"
      />
      <ImageCard
        imgUrl="https://rodrigomoran.space/wp-content/uploads/2021/02/visuals-768x452.jpg"
        linkUrl="/project-2"
        caption="_PROJECT zb113"
      />
    </div>
  );
}
