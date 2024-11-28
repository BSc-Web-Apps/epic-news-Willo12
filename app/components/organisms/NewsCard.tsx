

interface HeadlineProps {
  HeadlineTitle: String;

}

function NewsHeadline({ HeadlineTitle }: HeadlineProps) {
  return (
    <>

      <div className="p-8 h-48 w-48 bg-yellow-300 flex flex-col justify-between">
        <h1 className=" font-bold text-2xl">{HeadlineTitle}</h1>
        <p className="text-xs text-gray-400">Category</p>
      </div >



    </>

  )
}

export default NewsHeadline
