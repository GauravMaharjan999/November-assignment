const mongoose = require("mongoose");
const categories = mongoose.model("Categories");


//category of songs
const getAllCategories = async(req, res) => {
    const category = await categories.find();
    res.json(category)
};

const saveCategories = async(req, res) => {
    const { name } = req.body;
    const category = new categories({ name });
    await category.save();



    res.status(201).json(category);
};

const getCategoriesById = async(req, res) => {
    const category = await categories.findById(req.params.id)
        /*.catch(res.status(404).json({ message: 'error' })  )*/


    res.json(category);
};

const updateCategoriesById = async(req, res) => {
    const category = await categories.findById(req.params.id);
    if (!category) {
        return res.status(404).json({ error: "Data not found" });
    }

    category.name = req.body.name;
    await category.save();
    return res.status(200).json(category);
}

const destroyCategories = async(req, res) => {
    const category = await categories.findById(req.params.id);

    if (!category) {
        return res.status(404).json({ error: "category with given id not found" })
    }

    await category.remove();

    return res.status(200).json({ message: "deleted sucessfully" })
}


module.exports = { getAllCategories, saveCategories, getCategoriesById, updateCategoriesById, destroyCategories };