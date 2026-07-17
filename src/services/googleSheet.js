import Papa from 'papaparse';

// Env file se links le rahe hain
const MENU_CSV_URL = import.meta.env.VITE_MENU_CSV_URL;
const GALLERY_CSV_URL = import.meta.env.VITE_GALLERY_CSV_URL;

// Cache bypass karne ki trick (har request ko unique banata hai)
const getNoCacheUrl = (url) => {
  if (!url) return '';
  return `${url}${url.includes('?') ? '&' : '?'}v=${new Date().getTime()}`;
};

export const fetchMenuData = () => {
  return new Promise((resolve, reject) => {
    if (!MENU_CSV_URL) {
      reject("Menu CSV URL is not defined in .env file");
      return;
    }
    Papa.parse(getNoCacheUrl(MENU_CSV_URL), {
      download: true,
      header: true,
      complete: (results) => {
        const validData = results.data.filter(item => item.name);
        resolve(validData);
      },
      error: (error) => reject(error)
    });
  });
};

export const fetchGalleryData = () => {
  return new Promise((resolve, reject) => {
    if (!GALLERY_CSV_URL) {
      reject("Gallery CSV URL is not defined in .env file");
      return;
    }
    Papa.parse(getNoCacheUrl(GALLERY_CSV_URL), {
      download: true,
      header: true,
      complete: (results) => {
        const validData = results.data.filter(item => item.image_url);
        resolve(validData);
      },
      error: (error) => reject(error)
    });
  });
};