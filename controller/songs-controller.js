const mongoose = require("mongoose");
const Songs = mongoose.model("Songs");
const Categories = mongoose.model("Categories");




// songs

const getAllSongs = async(req, res) => {
    const song = await Songs.find();
    res.json(song)
};

const saveSong = async(req, res) => {
    const checkCategory = await Categories.findOne({ name: req.body.category });
    if (!checkCategory) {
        return res.status(401).json({ error: "Category not found" })
    }

    const { name, category, creatorId } = req.body;
    const song = new Songs({ name, category, creatorId });
    await song.save();



    res.status(201).json(song);
};

const getSongsById = async(req, res) => {
    const song = await Songs.findById(req.params.id);
    // if (!song) {
    //     res.json({ error: "song with given id was not found" })
    // }
    res.json(song);
};

const updateSongsById = async(req, res) => {

    const song = await Songs.findById(req.params.id);
    if (!song) {
        return res.status(404).json({ error: "Data not found" });
    }

    const checkCategory = await Categories.findOne({ name: req.body.category });
    if (!checkCategory) {
        return res.status(401).json({ error: "Category not found" })
    }

    song.name = req.body.name;
    song.category = req.body.category;
    song.creatorId = req.body.creatorId;

    await song.save();
    return res.status(200).json(song);
}

const destroySong = async(req, res) => {
    const song = await Songs.findById(req.params.id);

    if (!song) {
        return res.status(404).json({ error: "song with given id not found" })
    }

    await song.remove();

    return res.status(200).json({ message: "deleted sucessfully" })
}


module.exports = { getAllSongs, saveSong, getSongsById, updateSongsById, destroySong };