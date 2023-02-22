const authMiddleware = (req, res, next) => {
  // Vérifier si l'utilisateur est connecté
  if (!req.user) {
    return res.status(401).json({ message: "Vous devez vous connecter pour effectuer cette action." });
  }

  // Récupérer l'ID de l'utilisateur
  const userId = req.user.id;

  // Ajouter l'ID de l'utilisateur à la demande
  req.body.userId = userId;

  // Poursuivre la requête
  next();
};

module.exports = authMiddleware;
