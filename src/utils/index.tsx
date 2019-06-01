export const getFluidImage = (websiteImages: any, imagePath: string) => {
  return websiteImages.edges
    .map((imageNode: any) => {
      if (imageNode.node.relativePath === imagePath) {
        return imageNode.node.childImageSharp.fluid;
      }
    })
    .filter(function(e: any) {
      return e;
    })[0];
};
