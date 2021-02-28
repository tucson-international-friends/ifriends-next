// eslint-disable-next-line import/prefer-default-export
export const getStorageMediaUrl = str => `https://firebasestorage.googleapis.com/v0/b/tucson-international-friends.appspot.com/o/${str.replace("/", "%2F")}?alt=media`;
