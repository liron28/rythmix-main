import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

const STORAGE_KEY = "station";

export const stationService = {
  query,
  getById,
  save,
  remove,
  getEmptyStation,
  getEmptySong,
};
window.stationService = stationService; // TODO: For debug purpose; remove later.
_createDemoData();

/**
 * Retrieves a list of stations from storage, optionally filtered by a criteria.
 * @param {Object} filterBy - The filter criteria to apply to the stations.
 * @returns {Promise<Array>} - A Promise that resolves to an array of stations.
 */
async function query(filterBy) {
  // Call the storageService.query() function to fetch data asynchronously
  let stations = await storageService.query(STORAGE_KEY);

  // If filterBy is provided and truthy
  if (filterBy && Object.keys(filterBy).length > 0) {
    // Filter the stations array based on the filter criteria
    stations = stations.filter((currStation) => _isStationMatchingFilter(currStation, filterBy));
  }

  // Return the filtered stations array
  return stations;
}

/**
 * Retrieves a station from storage by its ID.
 * @param {string} stationId - The ID of the station to retrieve.
 * @returns {Promise<Object|null>} - A Promise that resolves to the station object with the given ID, or null if not found.
 */
async function getById(stationId) {
  return await storageService.get(STORAGE_KEY, stationId);
}

/**
 * Removes a station from storage by its ID.
 * @param {string} stationId - The ID of the station to remove.
 * @returns {Promise<void>} - A Promise that resolves when the station is successfully removed from storage.
 */
async function remove(stationId) {
  await storageService.remove(STORAGE_KEY, stationId);
}

/**
 * Saves a station to storage.
 * @param {Object} station - The station object to save.
 * @returns {Promise<Object>} - A Promise that resolves to the saved station object.
 */
async function save(station) {
  let savedStation;
  if (station._id) {
    savedStation = await storageService.put(STORAGE_KEY, station);
  } else {
    savedStation = await storageService.post(STORAGE_KEY, station);
  }
  return savedStation;
}

/**
 * Creates and returns an empty station object with default values.
 * @returns {Object} - An empty station object.
 */
function getEmptyStation() {
  let station = {
    _id: "",
    name: "",
    tags: [],
    createdBy: {
      _id: "",
      fullname: "",
      imgUrl: "",
    },
    likedByUsers: [],
    songs: [],
    msgs: [
      {
        id: "",
        from: "",
        txt: "",
      },
    ],
  };

  return station;
}

/**
 * Creates and returns an empty song object.
 * @returns {Object} An empty song object with default properties.
 */
function getEmptySong() {
  let song = {
    id: "",
    title: "",
    url: "",
    imgUrl: "",
    addedBy: "",
    addedAt: 0,
  };
  return song;
}

/**
 * Determines if a station matches the provided filter criteria.
 * @param {Object} station - The station object to evaluate.
 * @param {Object} filterBy - The filter criteria to apply.
 * @returns {boolean} - Returns true if the station matches the filter criteria, otherwise false.
 */
function _isStationMatchingFilter(station, filterBy) {
  return true;
}

function _createDemoData() {
  let stations = utilService.loadFromStorage(STORAGE_KEY);
  if (!stations || !stations.length) {
    stations = [
      {
        _id: "5cksxjas89xjsa8xjsa8jxs09",
        name: "Funky Monks",
        tags: ["Funk", "Happy"],
        createdBy: {
          _id: "u101",
          fullname: "Puki Ben David",
          imgUrl: "http://some-photo/",
        },
        likedByUsers: ["{minimal-user}", "{minimal-user}"],
        songs: [
          {
            id: "s1001",
            title: "The Meters - Cissy Strut",
            url: "youtube/song.mp4",
            imgUrl: "https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg",
            addedBy: "{minimal-user}",
            addedAt: 162521765262,
          },
          {
            id: "mUkfiLjooxs",
            title: "The JB's - Pass The Peas",
            url: "youtube/song.mp4",
            imgUrl: "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
            addedBy: "SomeOne",
            addedAt: 162521795362,
          },
        ],
        msgs: [
          {
            id: "m101",
            from: "{mini-user}",
            txt: "Manish?",
          },
        ],
      },
    ];
    utilService.saveToStorage(STORAGE_KEY, stations);
  }
}
