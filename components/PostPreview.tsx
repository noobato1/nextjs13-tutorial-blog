import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="shadow-md bg-white p-6 border rounded-xl border-slate-200">
      <Link href={`posts/${props.slug}`}>
        <h2 className="text-2xl text-violet-700 font-bold hover:underline">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{props.date}</p>
      <p className="text-slate-800">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;