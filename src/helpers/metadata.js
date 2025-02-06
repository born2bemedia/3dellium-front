const createMetadata = ({ title, description, imageUrl }) => {
  return {
    title: `${title} | 3Dellium`,
    description: description || "",
    openGraph: {
      title: `${title} | 3Dellium`,
      description: description || "",
      images: imageUrl ? [{ url: imageUrl, width: 800, height: 600 }] : [],
    },
  };
};

export default createMetadata;
