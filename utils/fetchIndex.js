const minioBase = 'https://s3-api.prud.uk/web/church/hyvong';
export const PAGES_BASE = `${minioBase}/pages`;
export const MEDIA_BASE = `${minioBase}/media`;
export const ASSETS_BASE = `${MEDIA_BASE}/assets`;

// Gospel fetching with in-memory + localStorage caching
const GOSPEL_CACHE_KEY = 'gospel_json_cache_v1';
let _gospelMemoryCache = null;

export async function fetchAnnouncements() {
  const res = await fetch(`${minioBase}/anns.json?t=${Date.now()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch anns.json');
  }
  return res.json();
}

export async function fetchPhotos() {
  const res = await fetch(`${minioBase}/photos.json?t=${Date.now()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch photos.json');
  }
  return res.json();
}

export async function fetchGospelsCached({ ttlMs = 1000 * 60 * 60 * 12, url } = {}) {
  // url: optional override, default to upstream raw URL
  const GOSPEL_URL = url || 'https://raw.githubusercontent.com/nqminhuit/liturgical-calendar/refs/heads/master/resources/gospel.json';

  // Return memory cache if still present
  if (_gospelMemoryCache) {
    return _gospelMemoryCache;
  }

  // Try localStorage
  try {
    const raw = localStorage.getItem(GOSPEL_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.timestamp && (Date.now() - parsed.timestamp) < ttlMs && parsed.data) {
        _gospelMemoryCache = parsed.data;
        return _gospelMemoryCache;
      }
    }
  } catch (e) {
    console.warn('Failed reading gospel cache', e);
  }

  // Fetch from network
  const res = await fetch(`${GOSPEL_URL}?t=${Date.now()}`);
  if (!res.ok) {
    // If we had stale localStorage data, return it as fallback
    try {
      const raw = localStorage.getItem(GOSPEL_CACHE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.data) {
          _gospelMemoryCache = parsed.data;
          return _gospelMemoryCache;
        }
      }
    } catch (e) {
      console.warn('Fetch error was', res.status, res.statusText);
    }
    throw new Error(`Failed to fetch gospel.json: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  _gospelMemoryCache = data;

  // Persist to localStorage
  try {
    localStorage.setItem(GOSPEL_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
  } catch (e) {
    console.warn('Failed to write gospel cache', e);
  }

  return _gospelMemoryCache;
}
