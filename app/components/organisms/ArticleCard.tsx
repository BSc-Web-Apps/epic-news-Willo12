interface ArticleCardProps {
  title: String
  category: String
  imageId: String
}

const ArticleCard = ({ title, category, imageId }: ArticleCardProps) => {
  return (
    <>
      <div className="h-40 bg-red-900 p-4 transition-all duration-500 hover:h-52">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p>{category}</p>
      </div>
    </>
  )
}

export default ArticleCard
