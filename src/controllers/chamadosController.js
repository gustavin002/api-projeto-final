import { chamados } from "../data/chamados.js";
// GET Listar Chamados
export function listarChamados(req, res) {
  res.json(chamados);
}

export function buscarChamadoPorId(req, res) {
  const id = Number(req.params.id);
  const chamado = chamados.find((c) => c.id === id);

  if (!chamado) {
    return res.status(404).json({ erro: "Chamado não encontrado" });
  }

  return res.json(chamado);
}

export function criarChamado(req, res) {
  const { titulo, descricao, status } = req.body;

  if (!titulo || !descricao || !status) {
    return res.status(400).json({ erro: "Campos obrigatórios ausentes" });
  }

  const novoChamado = {
    id: chamados.length + 1,
    titulo,
    descricao,
    status,
  };

  chamados.push(novoChamado);
  return res.status(201).json(novoChamado);
}

export function atualizarChamado(req, res) {
  const id = Number(req.params.id);
  const chamado = chamados.find((c) => c.id === id);

  if (!chamado) {
    return res.status(404).json({ erro: "Chamado não encontrado" });
  }

  const { titulo, descricao, status } = req.body;

  if (titulo) chamado.titulo = titulo;
  if (descricao) chamado.descricao = descricao;
  if (status) chamado.status = status;

  return res.json(chamado);
}

export function deletarChamado(req, res) {
  const id = Number(req.params.id);
  const index = chamados.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Chamado não encontrado" });
  }

  chamados.splice(index, 1);
  return res.status(204).send();
}
