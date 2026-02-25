const minioBase = 'https://s3-api.prud.uk/web/church/hyvong';
export const PAGES_BASE = `${minioBase}/pages`;
export const MEDIA_BASE = `${minioBase}/media`;
export const ASSETS_BASE = `${MEDIA_BASE}/assets`;

export const fetchAnnouncements = async () => {
  const res = await fetch(`${minioBase}/anns.json?t=${Date.now()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch anns.json');
  }
  return res.json();
};

export const fetchPhotos = async () => {
  const res = await fetch(`${minioBase}/photos.json?t=${Date.now()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch photos.json');
  }
  return res.json();
};
