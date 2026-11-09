import { categorias } from "../data/categorias.js";
// GET
export function listarCategorias(req, res) {
  res.json(categorias);
}

export function buscarCategoriaPorId(req, res) {
  const id = Number(req.params.id);
  const categoria = categorias.find((c) => c.id === id);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }

  return res.json(categoria);
}

export function criarCategoria(req, res) {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Campo 'nome' é obrigatório" });
  }

  const novaCategoria = {
    id: categorias.length + 1,
    nome,
  };

  categorias.push(novaCategoria);
  return res.status(201).json(novaCategoria);
}

export function atualizarCategoria(req, res) {
  const id = Number(req.params.id);
  const categoria = categorias.find((c) => c.id === id);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }

  const { nome } = req.body;

  if (nome) categoria.nome = nome;

  return res.json(categoria);
}

export function deletarCategoria(req, res) {
  const id = Number(req.params.id);
  const index = categorias.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }

  categorias.splice(index, 1);
  return res.status(204).send();
}
