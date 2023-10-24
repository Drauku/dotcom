import Markdoc from "@markdoc/markdoc";
import fs from "fs";
import { Metadata } from "next";
import path from "path";
import React from "react";
import AuthorView from "@/components/AuthorView";
import authorList from "@/consts/author";
import { getBlogSlugList } from "@/lib/content";
import { markdoc } from "@/markdoc/markdoc";
import { getMetadata } from "@/utils/metadata";

interface Props {
  params: { slug: string };
}

const Page = ({ params }: Props) => {
  const content = readBlogContent(params.slug);
  const { frontmatter, transformedContent } = markdoc(content);
  const author = authorList.find((author) => author.name === frontmatter.author);

  return (
    <>
      <div className="pt-4 w-full mx-auto sm:px-20 prose sm:prose-lg max-w-none prose-a:text-blue-600">
        {frontmatter.feature_image && (
          <div className="w-full mb-12">
            <img className="w-full h-auto" src={frontmatter.feature_image} alt="" />
          </div>
        )}
        <h1>{frontmatter.title}</h1>
        {author && <AuthorView author={author} />}
        {Markdoc.renderers.react(transformedContent, React)}
      </div>
    </>
  );
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const content = readBlogContent(params.slug);
  const { frontmatter } = markdoc(content);
  return getMetadata({
    title: frontmatter.title,
    pathname: `/blog/${params.slug}`,
    description: frontmatter.description,
    imagePath: frontmatter.feature_image,
  });
};

export const generateStaticParams = () => {
  return getBlogSlugList().map((contentSlug) => {
    return { slug: contentSlug };
  });
};

const readBlogContent = (contentSlug: string) => {
  const filePath = path.resolve(`./content/blog/${contentSlug}.md`);
  const content = fs.readFileSync(filePath, "utf8");
  return content;
};

export default Page;