export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";

  const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

  console.log("TMDB KEY:", apiKey);

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ru-RU&page=${page}`;

  try {
    const res = await fetch(url);

    const data = await res.json();
    console.log("TMDB RESPONSE:", data);

    return Response.json(data.results); // ← ВАЖНО!
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
