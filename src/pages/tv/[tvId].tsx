import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { pageState } from "@/recoil/page";

import axios from "axios";

import Seo from "@/components/Seo";
import Main from "@/components/details/Main";
import Casts from "@/components/details/Casts";
import Trailer from "@/components/details/Trailer";
import Prod from "@/components/details/Prod";

import { TvType, CastType, VideoType } from "@/types";

type CreditType = {
  cast: CastType[];
};

type VideosType = {
  results: VideoType[];
};

export default function MoviePage({
  tv,
  credit,
  videos,
}: {
  tv: TvType;
  credit: CreditType;
  videos: VideosType;
}) {
  const setPage = useSetRecoilState(pageState);

  useEffect(() => {
    setPage(2);
  }, []);

  const og = {
    title: tv.name,
    image: `https://image.tmdb.org/t/p/w1280${tv.poster_path}`,
    description: tv.overview,
  };

  return (
    <>
      <Seo title={tv.name} og={og} />
      <Main
        poster_path={tv.poster_path}
        title={tv.name}
        tagline={tv.tagline}
        genres={tv.genres}
        date={tv.first_air_date}
        vote_average={tv.vote_average}
        overview={tv.overview}
      />
      <Trailer data={videos} />
      <Casts data={credit} />
      <Prod data={tv.production_companies} />
      <img
        className="fixed left-2/4 translate-x-[-50%] top-0 object-cover w-screen h-screen opacity-20 z-[-1]"
        src={`https://image.tmdb.org/t/p/w1280${tv.backdrop_path}`}
      />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { tvId } = query;

  try {
    const baseUrl = "https://api.themoviedb.org/3";

    //  Fetching tv details data
    const res1 = await axios.get(`${baseUrl}/tv/${tvId}`, {
      params: {
        api_key: process.env.API_KEY,
        region: "KR",
        language: "ko-KR",
      },
    });
    // Fetching tv credits data
    const res2 = await axios.get(`${baseUrl}/tv/${tvId}/credits`, {
      params: {
        api_key: process.env.API_KEY,
        region: "KR",
        language: "ko-KR",
      },
    });
    // Fetching tv videos data
    const res3 = await axios.get(`${baseUrl}/tv/${tvId}/videos`, {
      params: {
        api_key: process.env.API_KEY,
        region: "KR",
        language: "ko-KR",
      },
    });

    const tv = res1.data;
    const credit = res2.data;
    const videos = res3.data;

    return {
      props: { tv, credit, videos },
    };
  } catch (err) {
    console.log("There was an Error:", err);
    return {
      props: {
        tv: null,
        credit: null,
        videos: null,
      },
    };
  }
}
