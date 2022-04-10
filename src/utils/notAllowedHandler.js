const methodNotAllowed = (req, res, next) => res.status(405).send();

export default methodNotAllowed