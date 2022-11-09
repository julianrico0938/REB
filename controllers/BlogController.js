import BlogModel from "../models/BlogModel.js";

//** Metodos CRUD **/

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (err) {
    res.json({ message: err.message });
  }
};

//Mostrar un registro
export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

//Crear un registro
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({
      Message: " ¡Registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: err.message });
  }
};

//Actualizar un registro
export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      Message: " ¡Registro actualizado correctamente",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

//Eliminar un registro
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      Message: " ¡Registro eliminado correctamente",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};
