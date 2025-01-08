import { MdComputer } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { LiaTheaterMasksSolid } from 'react-icons/lia'
import { FaNewspaper } from 'react-icons/fa'



type Category = "Business" | "Technology" | "Entertainment" | "General News";


interface ArticleCardProps {
  title: String
  category?: Category;
  imageId: String
}



const ArticleCard = ({ title, category = "General News", imageId }: ArticleCardProps) => {
  const ArticleIcons: Record<Category, JSX.Element> = {
    Business: <MdBusinessCenter />,
    Technology: <MdComputer />,
    Entertainment: <LiaTheaterMasksSolid />,
    "General News": <FaNewspaper />,
  }
  return (
    <>
      <div className="h-40 bg-red-900 p-4 transition-all duration-500 hover:h-52">
        <h1 className="font-semibold text-lg">{title}</h1>
        <div className="flex">
          {category ? ArticleIcons[category] : <FaNewspaper />}
          <p>{category}</p>
        </div>
      </div>
    </>
  )
}

export default ArticleCard
