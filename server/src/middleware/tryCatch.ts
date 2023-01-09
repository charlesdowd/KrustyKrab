import { Request, Response, NextFunction } from 'express';

export const tryCatch =
  (controller: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (error) {
      // Log the error here for the server, then pass to the middleware
      console.log(error);
      return next(error);
    }
  };
