"use client";

import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Spinner from "../../components/Spinner";

import { usePathname } from "next/navigation";
import usePosts from "../../hooks/usePosts";

type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Posts = () => {
  const path = usePathname();
  const initial = path.charAt(1).toUpperCase();
  const rest = path.slice(2, path.length);
  const pageName = initial + rest;

  const { isLoading, error, data } = usePosts();

  if (isLoading) return <Spinner isLoading />;

  if (error) return <p> An error has occurred: {(error as any).message}</p>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-2">
        {data.map((data: PostType) => {
          return (
            <Card key={data.id}>
              <CardHeader>
                <CardTitle className="text-lg capitalize">
                  {data.title.substring(0, 10)}
                </CardTitle>
                <CardDescription className="font-normal">
                  {data.body}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-end text-sm">
                <Button size={"sm"}>
                  <Link href={`/posts/${data.id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
