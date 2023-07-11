import { Request, Response, NextFunction } from 'express';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.uid) next();
  else res.status(401).json({
    msg: 'O usuario não está autorizado bla bla bla'
  })
};

export default checkAuth;
