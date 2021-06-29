const objectPath = require('@parameter1/base-cms-object-path');

const { getAsArray } = objectPath;

const get = (o, path) => {
  const v = objectPath.get(o, path);
  return v == null ? undefined : v;
};

const getAuthor = (node) => {
  const authors = getAsArray(node, 'authors.edges').map(e => get(e, 'node.name'));
  return authors.length ? { '@type': 'Person', name: authors.join(', ') } : undefined;
};

const getImages = (node) => {
  const images = getAsArray(node, 'images.edges').map(e => get(e, 'node.src'));
  return images.length ? images : undefined;
};

const getCreators = node => getAsArray(node, 'authors.edges').map(e => get(e, 'node.name'));

const getKeywords = node => getAsArray(node, 'taxonomy.edges').map(e => get(e, 'node.name'));

const getPublishedISOString = (node) => {
  const { published } = node;
  return published ? (new Date(published)).toISOString() : undefined;
};

const getUpdatedISOString = (node) => {
  const { updated } = node;
  return updated ? (new Date(updated)).toISOString() : undefined;
};

module.exports = (node) => {
  const siteUrl = get(node, 'siteContext.url');
  const canonicalUrl = get(node, 'siteContext.canonicalUrl');
  if (node.type === 'video') {
    const structuredData = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: get(node, 'metadata.title'),
      description: get(node, 'metadata.description'),
      thumbnailUrl: get(node, 'metadata.image.src'),
      uploadDate: getPublishedISOString(node),
      author: getAuthor(node),
      embedUrl: get(node, 'embedSrc'),
      url: canonicalUrl,
      ...(siteUrl !== canonicalUrl && { url: siteUrl, isBasedOn: canonicalUrl }),
      ...(getCreators(node).length && { creator: getCreators(node) }),
      ...(getKeywords(node).length && { keywords: getKeywords(node) }),
    });
    return structuredData;
  }

  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': get(node, 'siteContext.canonicalUrl'),
    },
    name: get(node, 'metadata.title'),
    description: get(node, 'metadata.description'),
    image: getImages(node),
    datePublished: getPublishedISOString(node),
    ...(getUpdatedISOString(node) !== getPublishedISOString(node) && {
      dateModified: getUpdatedISOString(node),
    }),
    url: canonicalUrl,
    ...(siteUrl !== canonicalUrl && { url: siteUrl, isBasedOn: canonicalUrl }),
    thumbnailUrl: get(node, 'metadata.image.src'),
    ...(getCreators(node).length && { creator: getCreators(node) }),
    ...(getKeywords(node).length && { keywords: getKeywords(node) }),
  });
  return structuredData;
};
