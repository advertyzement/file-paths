const imageFormats = ['png', 'jpg', 'jpeg', 'webp', 'gif'];

const IMG_PREFIX = 'image/upload';
const THUMBNAIL_TRANSFORMATION = 'w_144';
const PREVIEW_TRANSFORMATION = 'w_300';

function getExtension(path) {
  const fullFileName = path.substring(path.lastIndexOf('/') + 1);
  return fullFileName.substring(fullFileName.lastIndexOf('.') + 1).toLowerCase();
}
