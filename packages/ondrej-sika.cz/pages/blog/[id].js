import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";
// import AdBar from "@app/ondrejsika-theme/components/AdBar";
// import NewsletterBar from "@app/ondrejsika-theme/components/NewsletterBar";
import BlogAd from "@app/ondrejsika-theme/components/BlogAd";
import Head from "next/head";
import posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";

let posts_id_map = {};
posts.map((element, i) => {
  posts_id_map[element.id] = i;
});

let Post = props => {
  let post = posts[posts_id_map[props.post_id]];
  return (
    <div>
      <Head>
        <title>{post.title} - Ondřej Šika</title>
      </Head>
      <MainBar
        header={post.title}
        text={
          post.tags &&
          post.tags.map((tag, i) => (
            <span key={i} style={{ fontSize: "0.8em" }}>
              #{tag}{" "}
            </span>
          ))
        }
      />
      <div className="container pt-4">
        <Markdown source={post.content} />
        <BlogAd site={props.site} />
      </div>
    </div>
  );
};

Post.getInitialProps = async function(context) {
  return { post_id: context.query.id };
};

export default Post;
