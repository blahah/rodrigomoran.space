import Link from "next/link"

export default function Page() {
    return (
      <main className="w-full p-6">
        <div className="flex flex-col max-w-96 font-mono text-sm text-balance">
          <p className="mb-4">
            insta: @<Link className="link hover:text-neutral-400" href="https://www.instagram.com/rodri_moran/">
              rodri_moran
            </Link>
          </p>
          <p className="mb-4">
            yt: @<Link className="link hover:text-neutral-400" href="https://www.youtube.com/@rmoraniusmoranius8676">
              rmoraniusmoranius8676
            </Link>
          </p>
          <p className="mb-4">email: ciao@rodrigomoran.space</p>
        </div>
      </main>
    )
  }