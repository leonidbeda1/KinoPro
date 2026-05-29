export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";

  const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ru-RU&page=${page}`
  );

  const data = await res.json();

  // TMDB отдаёт 20 фильмов — мы берём только 10
  return Response.json(data.results.slice(0, 10));
}
