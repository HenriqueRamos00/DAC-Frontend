import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("posts/:postId", "routes/posts.$postId.tsx"),
] satisfies RouteConfig;