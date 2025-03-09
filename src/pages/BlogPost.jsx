import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

// Lazy load blog components
const blogComponents = {
  
  "how-accurate-is-snowdaycalculator": lazy(() => import("../blogs/how-accurate-is-snowdaycalculator")),
};

const BlogPost = () => {
  const { id } = useParams();
  const BlogComponent = blogComponents[id];

  if (!BlogComponent) return <h1 className="text-center text-3xl font-bold">Blog Not Found</h1>;

  return (
    <Suspense fallback={<h1 className="text-center text-2xl">Loading...</h1>}>
      <BlogComponent />
    </Suspense>
  );
};

export default BlogPost;
