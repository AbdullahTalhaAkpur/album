import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALBUM } from "../graphql/queries";
import { Spinner } from "../components/shared";
import PhotoCard from "../components/PhotoCard";

const AlbumPage = () => {
  const { albumId } = useParams();

  const { loading, error, data } = useQuery(GET_ALBUM, {
    variables: { albumId },
  });

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  const album = data.getAlbum;

  return (
    <div className="album-page">
      <h2>{album.name}</h2>
      <div className="photo-grid">
        {album.photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;