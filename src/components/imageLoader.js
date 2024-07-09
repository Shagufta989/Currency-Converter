// src/imageLoader.js

// Create a context for all images in the specified directory
const requireContext = require.context('./assets/Flags SVGs', false, /\.(png|jpe?g|svg)$/);

// Create a mapping of image names to their paths
const images = requireContext.keys().reduce((images, key) => {
  // Remove the './' at the beginning and keep the file name
  const imageName = key.replace('./', '');
  images[imageName] = requireContext(key);
  return images;
}, {});

export default images;
