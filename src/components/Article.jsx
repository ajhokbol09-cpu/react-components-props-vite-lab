// Child of ArticleList; renders the fields for one post.
function Article({
  title = "",
  date = "January 1, 1970",
  preview = "",
  minutes,
}) {
  const readTime =
    Number.isFinite(minutes) && minutes > 0
      ? `${minutes < 30 ? "☕️".repeat(Math.ceil(minutes / 5)) : "🍱".repeat(Math.ceil(minutes / 10))} ${minutes} min read`
      : null;

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {readTime && ` · ${readTime}`}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
