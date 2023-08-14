import ContentItem from "./ContentItem";

const Content:React.FC<IContent> = ({jobs}) => {
  return (
    <>
    {jobs && jobs.map((item, index) => (
      <div id={item.id} key={item.id} className="hidden tabcontent animate-fade-in">
        <ContentItem job={item.job} index={index}/>
      </div>
    ))}
    </>
  )
}

export default Content