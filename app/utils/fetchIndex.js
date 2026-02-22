const MINIO_BASE = 'https://s3-api.prud.uk/web/church/hyvong';

export const fetchIndexJson = async () => {
  const res = await fetch(`${MINIO_BASE}/index.json?t=${Date.now()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch index.json');
  }
  return res.json();
};
