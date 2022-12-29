import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '../../../components/getPostMetadata';

const getContentPost = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getContentPost(slug);
    return (
        <div>
            <article className='prose sm:prose-xl mx-auto'>
                <h1>{post.data.title}</h1>
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;