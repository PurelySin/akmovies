"use client";
import React, { useState } from 'react';

export default function Watch({ params }) {
  const { id } = params;
  const servers = [
    { name: "Server 1", url: `https://vidsrc.me/embed/movie?tmdb=${id}` },
    { name: "Server 2", url: `https://vidsrc.to/embed/movie/${id}` }
  ];
  const [url, setUrl] = useState(servers[0].url);

  return (
    <div className="p-5 bg-black min-h-screen">
      <a href="/" className="text-red-600 font-bold mb-5 block">← Back to Ronin</a>
      <div className="relative pt-[56.25%] bg-zinc-900 rounded-lg">
        <iframe src={url} className="absolute inset-0 w-full h-full" allowFullScreen frameBorder="0"></iframe>
      </div>
      <div className="mt-5 flex gap-4">
        {servers.map(s => (
          <button key={s.name} onClick={() => setUrl(s.url)} className={`px-4 py-2 rounded ${url === s.url ? 'bg-red-600' : 'bg-zinc-800'}`}>
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}
