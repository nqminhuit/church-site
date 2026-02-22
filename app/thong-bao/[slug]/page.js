import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { fetchIndexJson } from '../../utils/fetchIndex';

const MINIO_BASE = 'https://s3-api.prud.uk/web/church/hyvong';

// This function tells Next.js which dynamic routes to pre-render at build time
export async function generateStaticParams() {
  const data = await fetchIndexJson();
  return data.announcements.map((ann) => ({
    slug: ann.slug,
  }));
}

export default async function AnnouncementPage({ params }) {
  const { slug } = params;
  const res = await fetch(`${MINIO_BASE}/pages/${slug}.md?t=${Date.now()}`);
  if (!res.ok) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p>Không tìm thấy thông báo này.</p>
      </div>
    );
  }
  const content = await res.text();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-4xl font-bold text-green-800 mb-6 mt-8 first:mt-0">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-semibold text-green-800 mb-4 mt-6">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-semibold text-green-700 mb-3 mt-5">{children}</h3>,
          p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4 space-y-1">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-4">{children}</blockquote>,
          a: ({ href, children }) => <a href={href} className="text-green-700 underline hover:text-green-800" target="_blank" rel="noopener noreferrer">{children}</a>,
          img: ({ src, alt }) => {
            const fullSrc = src.startsWith('http') ? src : `${MINIO_BASE}/media/${src}`;
            return <Image
              src={fullSrc}
              alt={alt}
              className="max-w-full h-auto rounded-lg shadow-md my-4"
              width={1700}
              height={0} />;
          },
          code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>,
          pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">{children}</pre>,
        }}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
