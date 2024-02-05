export default function ArticleCard(props) {
  const { title, image, author } = props;
  return (
    <>
      <section className="article-card">
        <h3 className="article-card-title">{title}</h3>
        <br />
        <img className="article-card-img" src={image} alt={title} />
        <br />
        <p>Author: {author}</p>
      </section>
    </>
  );
}
