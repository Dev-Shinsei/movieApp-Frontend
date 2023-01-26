const favoriteUtils = {
  check: ({ listFavorites, mediaId }: any) =>
    listFavorites &&
    listFavorites.find(
      (e: { mediaId: any }) => e.mediaId.toString() === mediaId.toString()
    ) !== undefined, // Check if the mediaId is in the listFavorites
};

export default favoriteUtils;
