import { Box, CardMedia, type CardMediaProps } from "@mui/material";
import { type ReactNode, useEffect, useState } from "react";

interface IImageWithFallback extends Omit<CardMediaProps<"img">, "onError" | "onLoad" | "fallback" | "loading"> {
  fallback: ReactNode;
}

const ImageWithFallback = ({ fallback, sx, src, ...props }: IImageWithFallback) => {
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
    setIsLoaded(false);
  }, [src]);

  return (
    <>
      {error ? (
        <Box sx={{ ...sx, alignItems: "center", border: "1px solid", borderColor: "divider", display: "flex", justifyContent: "center" }}>
          {fallback}
        </Box>
      ) : (
        <CardMedia
          component="img"
          loading="lazy"
          src={src}
          onError={() => setError(true)}
          onLoad={() => setIsLoaded(true)}
          sx={{ ...sx, opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
          {...props}
        />
      )}
    </>
  );
};

export default ImageWithFallback;
