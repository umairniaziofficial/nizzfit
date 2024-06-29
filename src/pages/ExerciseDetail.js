import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; 
import { fetchData, ExerciseOptions, YoutubeOptions } from "../utils/fetchData";
import NavBar from "../components/NavBar";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      try {
        setLoading(true);

        // Fetch exercise details
        const exerciseResponse = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          ExerciseOptions
        );
        setExercise(exerciseResponse);

        // Fetch related YouTube videos
        const youtubeResponse = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseResponse.name} exercise`,
          YoutubeOptions
        );
        setYoutubeVideos(youtubeResponse.contents.slice(0, 2)); 

        setLoading(false);
      } catch (error) {
        console.error("Error fetching exercise detail:", error);
        setError("Failed to fetch exercise details. Please try again later.");
        setLoading(false);
      }
    };

    fetchExerciseDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-cOrange animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-cOrange animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-cOrange animate-bounce [animation-delay:-0.5s]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  if (!exercise) {
    return <p className="text-white text-center mt-10">No exercise found.</p>;
  }

  return (
   <div>
   <NavBar/>
     <div className="w-full bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 ">
        <Link
          to="/"
          className="text-lg text-orange-500 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Exercise Image and Basic Details */}
        <div className="flex-1">
          <img
            src={exercise.gifUrl || "default-image-url"}
            alt={exercise.name}
            className="w-full h-auto object-cover rounded-lg"
          />
          <h1 className="text-2xl font-bold capitalize text-orange-500 pt-5">
            {exercise.name}
          </h1>
          <div className="mt-6 space-y-4">
            <div className="flex space-x-2">
              <span className="text-xl text-red-400 capitalize font-semibold">
                Body Part:
              </span>
              <span className="text-xl capitalize">{exercise.bodyPart}</span>
            </div>
            <div className="flex space-x-2">
              <span className="text-xl text-red-400 capitalize font-semibold">
                Target:
              </span>
              <span className="text-xl capitalize">{exercise.target}</span>
            </div>
            <div className="flex space-x-2">
              <span className="text-xl text-red-400 capitalize font-semibold">
                Equipment:
              </span>
              <span className="text-xl capitalize">{exercise.equipment}</span>
            </div>
            {exercise.secondaryMuscles.length > 0 && (
              <div className="flex space-x-2">
                <span className="text-xl text-red-400 capitalize font-semibold whitespace-nowrap">
                  Secondary Muscles:
                </span>
                <span className="text-xl capitalize">
                  {exercise.secondaryMuscles.join(", ")}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Exercise Instructions and YouTube Videos */}
        <div className="flex-1">
          <h4 className="text-4xl pb-4">How to do this Exercise?</h4>
          {exercise.instructions.length > 0 ? (
            <ol className="list-decimal list-inside space-y-2 tracking-wider">
              {exercise.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          ) : (
            <p>No instructions available for this exercise.</p>
          )}

          {/* YouTube Videos */}
          {youtubeVideos.length > 0 && (
            <div className="mt-8">
              <h4 className="text-4xl pb-4">Watch These Videos</h4>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {youtubeVideos.map((video, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${video.video.videoId}`}
                      title={video.video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default ExerciseDetail;
