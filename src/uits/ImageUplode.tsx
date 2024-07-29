import React from 'react';

export const imageUpload = async (image: any) => {
  //  image upload in image bb......
  const formData = new FormData();
  formData.append('image', image);

  const url = `https://api.imgbb.com/1/upload?key=7c5ca837c679f7f5d86473bd4f5d15cd`;

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const result = await response.json();
  const imageUrl = result?.data?.display_url;
  return imageUrl;
};