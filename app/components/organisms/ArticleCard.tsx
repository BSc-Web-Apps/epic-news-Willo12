import { MdComputer } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { LiaTheaterMasksSolid } from 'react-icons/lia'
import { FaNewspaper } from 'react-icons/fa'

import { getArticleImgSrc } from '~/utils/misc.tsx'
import siteLogo from '~/assets/svg/icon-placeholder.svg'


type Category = "Business" | "Technology" | "Entertainment" | "General News";


interface ArticleCardProps {
  title: string
  category?: Category;
  imageId?: string
}



const ArticleCard = ({ title, category = "General News", imageId }: ArticleCardProps) => {
  const imageSrc = imageId ? getArticleImgSrc(imageId) : siteLogo
  const ArticleIcons: Record<Category, JSX.Element> = {
    Business: <MdBusinessCenter />,
    Technology: <MdComputer />,
    Entertainment: <LiaTheaterMasksSolid />,
    "General News": <FaNewspaper />,
  }
  return (
    <>
      <div>
        <div><img src={imageSrc} alt={title} /></div>
        <div className="h-40 bg-red-900 p-4 transition-all duration-500 hover:h-52">
          <h1 className="font-semibold text-lg">{title}</h1>
          <div className="flex">
            {category ? ArticleIcons[category] : <FaNewspaper />}
            <p>{category}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleCard
