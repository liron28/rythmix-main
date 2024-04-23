import axios from "axios";

export const searchService = {
  searchSongs,
  getSongInfo,
};

/**
 * Searches for videos on YouTube based on the provided query string.
 * @param {string} query - The search query string.
 * @param {number} maxResults - The maximum number of search results to retrieve.
 * @returns {Promise<Array<{title: string, videoId: string}>>} - A Promise that resolves with an array of search results, each containing title and videoId.
 */
async function searchSongs(query, maxResults) {
  if (query) {
    // Base URL for YouTube Data API
    const base_url = "https://www.googleapis.com/youtube/v3/search";

    try {
      // Define parameters for the request
      const params = {
        key: __API_KEY__,
        part: "snippet", // Specifies the snippet resource properties that the API response will include
        q: query, // The search query string
        type: "video", // Restricts the search results to only include videos
        maxResults: maxResults, // Maximum number of results to return
      };

      // Make the request to the API using Axios and await the response
      const response = await axios.get(base_url, { params });

      // Extract information from the response
      const results = response.data.items.map((item) => ({
        title: item.snippet.title,
        id: item.id.videoId,
        imgUrl: item.snippet.thumbnails.medium.url,
      }));

      return results;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return [];
}

async function getSongInfo(songId) {
  try {
    // Make a request to the videos.list endpoint
    const response = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        key: __API_KEY__,
        part: "snippet",
        id: songId,
      },
    });

    // Extract the song name and channel name from the response
    const snippet = response.data.items[0].snippet;
    return {
      songTitle: snippet.title,
      authorTitle: snippet.channelTitle,
      thumbnailUrl: snippet.thumbnails.medium.url,
    };
  } catch (error) {
    console.error("Error:", error);
  }
  return null;
}
