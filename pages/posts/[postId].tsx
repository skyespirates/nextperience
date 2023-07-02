import { useRouter } from "next/router";
import Link from "next/link";
import usePost from "../../hooks/usePost";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Spinner from "../../components/Spinner";

const Post = () => {
  const router = useRouter();
  const { isLoading, error, data } = usePost(router.query.postId);
  if (isLoading) return <Spinner isLoading />;

  if (error) return <p>An error occured: {(error as any).message}</p>;

  return (
    <div>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-xl capitalize">{data.title}</CardTitle>
        </CardHeader>
        <CardContent>{data.body}</CardContent>
      </Card>
      <Button>
        <Link className="text-sm" href={"/posts"}>
          Back
        </Link>
      </Button>
    </div>
  );
};

export default Post;
