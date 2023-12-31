import Youtube from "react-youtube";

export default function YoutubePlayer({
  videoId,
  videoName,
}: {
  videoId: string;
  videoName: string;
}) {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="mx-auto w-full md:w-[300px] md:ml-0 md:mr-5">
      <Youtube
        videoId={videoId}
        opts={opts}
        className="h-[300px] md:h-[200px]"
      />
      <p className="mt-3 text-lg text-primary-content font-bold">{videoName}</p>
    </div>
  );
}
