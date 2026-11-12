// Child of App; presents the blog image and description passed in as props.
function About({ image = "https://via.placeholder.com/215", about = "" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
