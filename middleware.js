import { authMiddleware} from "@clerk/nextjs";

export default authMiddleware({
   publicRoutes: ['/','/about','/explore','/blog'],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

