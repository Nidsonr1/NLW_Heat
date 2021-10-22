import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUseSevice';


class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;
  
   try {
    const service = new AuthenticateUserService();
    const response = await service.execute(code);
    return res.json(response);
   } catch (err) {
     return res.status(err.response.status).json({ error: err.message });
   }
  }
}

export { AuthenticateUserController }