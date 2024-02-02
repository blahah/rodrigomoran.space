export const ProjectHero = ({ title, description, year }) => {
  const descParts = Array.isArray(description)
    ? description
    : description.split("\n\n")
  const descSection = descParts
    .map(part => <p className={`pb-2 text-sm font-sans`}>{part}</p>)
  return (
    <div className="w-full p-6 flex md:flex-row flex-col">
      <div className="w-full md:w-50%">
        <div className="pb-6 md:w-2/3">
          <h1 className="text-xl h1 pb-4">{title}</h1>
          {descSection}
          <p>{year}</p>
        </div>
      </div>
    </div>
  )
}