export default function News({title,description}) {
  return (
    <>
      <div className="col-md-12">
        <h1>{title}</h1>
        <p>{description}</p>
        <hr />
      </div>
    </>
  );
}
