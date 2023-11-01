import { AudioUrlBase } from "@/config/index";
import Audio, { audio } from "@/models/audio.model";



export const success = async (req, res) => {
  const { songname, title, artist, language, category, lyrics } = req.body;
  const file =
    AudioUrlBase + "audio/songByNamePlay/" + req.files["file"][0].filename; // Assuming 'file' is the name attribute in your form
  const image =
    AudioUrlBase + "audio/songByNamePlay/" + req.files["image"][0].filename;
  console.log(req.files); // Array
  try {
    const audio = Audio.create({
      songname,
      title,
      artist,
      language,
      category,
      file,
      image,
      lyrics,
    });
    (await audio).save();
    return res.status(200).json("Details uploaded successfully");
  } catch (error) {
    return res.status(400).json({ error: "Details not uploaded." });
  }
};






// Getting Song By Name (Full Song Name)
export const songByName = async (req, res) => {
  try {
    const name = req.params.filename;
    console.log(name);

    const songs = await Audio.find({
      songname: name,
    });
    if (songs.length === 0) {
      // Handle the case when no song is found with the provided _id
      return res.status(404).json({ error: "Song not found." });
    }
    console.log(songs);
    res.status(200).json(songs);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred while fetching songs." });
  }
};

export const getAllSongsPlay = async (req, res) => {
  try {
    const perPage = 1; // Number of songs per page
    const page = parseInt(req.query.page, 3) || 1; // Current page, default to 1

    // Query the database to retrieve all songs
    const allSongs = await Audio.find({});

    // Calculate the total number of pages based on the number of songs and songs per page
    const totalPages = Math.ceil(allSongs.length / perPage);

    // Calculate the number of items to skip based on the current page
    const skip = (page - 1) * perPage;

    // Query the database to retrieve a limited number of songs for the current page
    const songs = allSongs.slice(skip, skip + perPage);

    res.status(200).json({ songs, totalPages, currentPage: page });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the songs." });
  }
};





export const songByWord = async (req, res) => {
  try {
    const name = req.params.filename;

    // Use a more precise query to find songs containing the word in the songname field
    const songs = await Audio.find({
      songname: { $regex: name, $options: "i" }, // Case-insensitive search
    });

    if (songs.length > 0) {
      const songDetails = songs.map((song) => ({
        songname: song.songname,
        title: song.title,
        artist: song.artist,
        language: song.language,
        category: song.category,
        file: song.file,
        image: song.image,
        lyrics: song.lyrics
      }));

      const filteredSongs = songDetails.filter((song) =>
        song.songname.includes(name)
      );

      if (filteredSongs.length > 0) {
        res.status(200).json(filteredSongs);
      } else {
        res.status(200).json({ message: `${name} Song not found.` });
      }
    } else {
      res.status(404).json({ message: `${name} Song not found.` });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred while fetching songs." });
  }
};


