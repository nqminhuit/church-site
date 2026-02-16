'use client'

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation';

export default function AnnouncementPage() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const MINIO_BASE = 'https://s3-api.prud.uk/web/church/hyvong';

  useEffect(() => {
    fetch(`${MINIO_BASE}/pages/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then(setContent)
      .catch(setError);
  }, [slug]);

  if (error) return <div>Không tìm thấy thông báo này.</div>;
  if (!content) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ReactMarkdown
        components={{
          h1: ({children}) => <h1 className="text-4xl font-bold text-green-800 mb-6 mt-8 first:mt-0">{children}</h1>,
          h2: ({children}) => <h2 className="text-3xl font-semibold text-green-800 mb-4 mt-6">{children}</h2>,
          h3: ({children}) => <h3 className="text-2xl font-semibold text-green-700 mb-3 mt-5">{children}</h3>,
          p: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
          ul: ({children}) => <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">{children}</ul>,
          ol: ({children}) => <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4 space-y-1">{children}</ol>,
          li: ({children}) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({children}) => <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-4">{children}</blockquote>,
          a: ({href, children}) => <a href={href} className="text-green-700 underline hover:text-green-800" target="_blank" rel="noopener noreferrer">{children}</a>,
          img: ({src, alt}) => {
            const fullSrc = src.startsWith('http') ? src : `${MINIO_BASE}/media/${src}`;
            return <img src={fullSrc} alt={alt} className="max-w-full h-auto rounded-lg shadow-md my-4" />;
          },
          code: ({children}) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>,
          pre: ({children}) => <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">{children}</pre>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
