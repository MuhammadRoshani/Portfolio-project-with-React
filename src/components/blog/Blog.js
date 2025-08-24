import "./Blog.css";
import BlogItem from "./BlogItem";
import image1Blog from "../../assets/images/post-1.jpg"
import image2Blog from "../../assets/images/post-2.jpg"
import image3Blog from "../../assets/images/post-3.jpg"

function Blog() {

  let blogs = [
    {
        blogImage : image1Blog,
        blogTitle : 'post title 1',
        blogDesc : '(1) Proin eget tortor risus. Pellentesque in ipsum id orci port dapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.',
        blogAuthor : 'Muhammad Roshani',
        blogTime : 10
    },
     {
        blogImage : image2Blog,
        blogTitle : 'post title 2',
        blogDesc : '(2) Proin eget tortor risus. Pellentesque in ipsum id orci port dapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.',
        blogAuthor : 'Behzad Akbari',
        blogTime : 12
    },
     {
        blogImage : image3Blog,
        blogTitle : 'post title 3',
        blogDesc : '(3) Proin eget tortor risus. Pellentesque in ipsum id orci port dapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.',
        blogAuthor : 'Fereshteh Heydari',
        blogTime : 15
    }
  ]  

  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <BlogItem {...blogs[0]} />
          <BlogItem {...blogs[1]} />
          <BlogItem {...blogs[2]} />
        </div>
      </div>
    </section>
  );
}

export default Blog;
