const imageFormats = ['png', 'jpg', 'jpeg', 'webp', 'gif'];

const CDN_CLOUD = 'cdn-your_domain.com';

const IMG_PREFIX = 'image/upload';
const RAW_PREFIX = 'raw/upload';

/**
 * To be used in CDN transformation
 */
const THUMBNAIL_TRANSFORMATION = 'w_144';
const PREVIEW_TRANSFORMATION = 'w_300';

const FILE_TYPE = {
  IMAGE: 'IMAGE',
  OTHER: 'OTHER',
};

function getExtension(path) {
  const fullFileName = path.substring(path.lastIndexOf('/') + 1);
  return fullFileName.substring(fullFileName.lastIndexOf('.') + 1).toLowerCase();
}

function getPathWithoutExtension(path) {
  let lastIndex = path.lastIndexOf('.');
  if (lastIndex <= 0) {
    lastIndex = path.length;
  }
  return path.substring(0, lastIndex);
}

function getFileType(path) {
  const extension = getExtension(path);

  if (imageFormats.includes(extension)) {
    return FILE_TYPE.IMAGE;
  } else {
    return FILE_TYPE.OTHER;
  }
}

/**
 * CDN upload prefix (Cup)
 * @param fileType
 * @returns {string}
 */
function createCupPrefix(fileType) {
  return `https://${CDN_CLOUD}/${fileType}`;
}

function createCupPrefixForTransform(path) {
  const fileType = getFileType(path);

  switch (fileType) {
    case FILE_TYPE.IMAGE: {
      return createCupPrefix(IMG_PREFIX);
    }
    default: {
      return createCupPrefix(RAW_PREFIX);
    }
  }
}
