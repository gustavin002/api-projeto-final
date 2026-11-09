// GET Listar Usuarios
export function listarUsuarios(req, res) {
  res.json(usuarios);
}

export function buscarUsuarioPorId(req, res) {
  const id = Number(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  return res.json(usuario);
}

export function criarUsuario(req, res) {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Nome e email são obrigatórios" });
  }

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
  };

  usuarios.push(novoUsuario);
  return res.status(201).json(novoUsuario);
}

export function atualizarUsuario(req, res) {
  const id = Number(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  const { nome, email } = req.body;

  if (nome) usuario.nome = nome;
  if (email) usuario.email = email;

  return res.json(usuario);
}

export function deletarUsuario(req, res) {
  const id = Number(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  usuarios.splice(index, 1);
  return res.status(204).send();
}
