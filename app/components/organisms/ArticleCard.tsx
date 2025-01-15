
import { MdComputer } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { LiaTheaterMasksSolid } from 'react-icons/lia';
import { FaNewspaper } from 'react-icons/fa';
import { Link } from "@remix-run/react";
import { getArticleImgSrc } from '~/utils/misc.tsx';
import siteLogo from '~/assets/svg/icon-placeholder.svg';
import { FaRegListAlt } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";

type Category = "Reviews" | "Technology" | "Community" | "General News";

interface ArticleCardProps {
  articleId: string;
  title: string;
  category?: Category;
  imageId?: string;
  className?: string; // Allow passing custom class names
}

const ArticleCard = ({ title, category = "General News", imageId, articleId, className }: ArticleCardProps) => {
  const imageSrc = imageId ? getArticleImgSrc(imageId) : siteLogo;

  const ArticleIcons: Record<Category, JSX.Element> = {
    Reviews: <FaRegListAlt />,
    Technology: <MdComputer />,
    Community: <RiUserCommunityFill />,
    "General News": <FaNewspaper />,
  };

  return (
<<<<<<< HEAD
    <Link to={`/article/${articleId}`}>
      <div className={`cursor-pointer transition-all duration-500 hover:scale-105 ${className}`}>
        <div>
          <img
            className="h-64 w-full rounded-t object-cover"
            src={imageSrc}
            alt={title}
          />
        </div>
        <div className="h-40 bg-red-900 p-4 transition-all duration-500 hover:h-52 flex flex-col justify-between">
          <h1 className="font-semibold text-lg">{title}</h1>
          <div className="flex items-baseline">
            <div className="flex space-x-1">
              {category ? ArticleIcons[category] : <FaNewspaper />}
              <p>{category}</p>
=======
    <>
      <Link to={`/article/${articleId}`}>
        <div className="cursor-pointer transition-all duration-500 hover:scale-105">
          <div ><img className="h-64 w-full rounded-t object-cover" src={imageSrc} alt={title} /></div>
          <div className="h-40 bg-red-900 p-4 transition-all duration-500 hover:h-52 flex flex-col justify-between">
            <h1 className="font-semibold text-lg w-40">{title}</h1>
            <div className="flex items-baseline">
              <div className="flex space-x-1">
                {category ? ArticleIcons[category] : <FaNewspaper />}
                <p>{category}</p>
              </div>
>>>>>>> 9c02bdc (.)
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
