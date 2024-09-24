import News from "./News";

export default function Newslist() {
    let newslist=[
        {
            'id':1,
            'title':'title1',
            'description':'description1'
        },
        {
            'id':2,
            'title':'title2',
            'description':'description2'
        },
        {
            'id':3,
            'title':'title3',
            'description':'description3'
        },
    ]
  return (
    <>
      <div className="container">
        <div className="row ">
        {newslist.map((news)=>{
            return <News title={news.title} description={news.description}/>
        })}
          <News/>
        </div>
      </div>
    </>
  );
}
