import React, { useState } from "react";
import { Film, Search, Star, Clock, Users, Calendar, Award } from "lucide-react";
import DotLoader from "./component/DotLoader";

const App = () => {
  const API_KEY = "60b412e9";
  const [movieInput, setMovieInput] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      setError(null);
      if (!movieInput.trim()) return;
      
      const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieInput}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to make API Call!");
      
      const data = await response.json();
      if (data.Response === "False") {
        setError(data.Error);
        setMovieData(null);
      } else {
        setMovieData(data);
      }
    } catch (error) {
      setError("Failed to connect with API!");
      setMovieData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 p-6">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl">
            <Film className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            🎬 CineSearch
          </h1>
          <p className="text-purple-200 text-lg">Discover movies instantly</p>
        </header>

        {/* Search Bar */}
        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative">
            <div className="flex items-center gap-3 rounded-2xl border border-purple-500/20 bg-white/10 backdrop-blur-md p-4 shadow-2xl">
              <Search className="h-6 w-6 text-purple-300" />
              <input
                type="text"
                value={movieInput}
                onChange={(e) => setMovieInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") fetchMovieData();
                }}
                placeholder="Search for any movie..."
                className="w-full bg-transparent text-white text-lg outline-none placeholder:text-purple-200"
              />
              <button
                onClick={fetchMovieData}
                className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="mx-auto max-w-4xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <DotLoader />
              <p className="mt-4 text-purple-200">Searching for movies...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                <Film className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Movie Not Found</h3>
              <p className="text-red-300">{error}</p>
            </div>
          ) : movieData ? (
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Movie Poster */}
              <div className="md:col-span-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative">
                    {movieData.Poster !== "N/A" ? (
                      <img 
                        src={movieData.Poster} 
                        alt={movieData.Title}
                        className="w-full rounded-2xl shadow-2xl"
                      />
                    ) : (
                      <div className="aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                        <Film className="h-16 w-16 text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Movie Details */}
              <div className="md:col-span-2 space-y-6">
                {/* Title and Year */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {movieData.Title}
                  </h2>
                  <div className="flex items-center gap-4 text-purple-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{movieData.Year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{movieData.Runtime}</span>
                    </div>
                  </div>
                </div>

                {/* Rating and Genre */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-yellow-500/20 rounded-full px-4 py-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-300 font-semibold">{movieData.imdbRating}/10</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2">
                    <Award className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-300">{movieData.Rated}</span>
                  </div>
                </div>

                {/* Genre Tags */}
                <div className="flex flex-wrap gap-2">
                  {movieData.Genre.split(', ').map((genre, index) => (
                    <span key={index} className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200 px-3 py-1 rounded-full text-sm border border-pink-500/30">
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Plot */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">Plot</h3>
                  <p className="text-gray-300 leading-relaxed">{movieData.Plot}</p>
                </div>

                {/* Cast and Crew */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-blue-400" />
                      <h4 className="font-semibold text-white">Director</h4>
                    </div>
                    <p className="text-blue-300">{movieData.Director}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-green-400" />
                      <h4 className="font-semibold text-white">Actors</h4>
                    </div>
                    <p className="text-green-300 text-sm">{movieData.Actors}</p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <a
                    href={`https://www.imdb.com/title/${movieData.imdbID}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    <Film className="h-5 w-5" />
                    View on IMDb
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <Search className="h-10 w-10 text-purple-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Ready to Search</h3>
              <p className="text-purple-200">Enter a movie title above to get started</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default App;
