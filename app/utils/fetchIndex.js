export const MINIO_BASE = 'https://s3-api.prud.uk/web/church/hyvong';

export const fetchAnnouncements = async () => {
  const res = await fetch(`${MINIO_BASE}/anns.json?t=${Date.now()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch anns.json');
  }
  return res.json();
};

export const fetchPhotos = async () => {
  const res = await fetch(`${MINIO_BASE}/photos.json?t=${Date.now()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch photos.json');
  }
  return res.json();
};
