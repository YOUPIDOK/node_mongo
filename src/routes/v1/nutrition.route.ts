import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { nutritionController, nutritionValidation } from '../../modules/nutrition';

const router: Router = express.Router();

router.route('/').get(validate(nutritionValidation.getNutritions), nutritionController.queryNutritions);

export default router;

/**
 * @swagger
 * tags:
 *   name: Nutritions
 *   description: Nutrition management and retrieval
 */

/**
 * @swagger
 * /nutritions:
 *   get:
 *     summary: Query all nutritions
 *     description: Everybody can retrieve all nutritions.
 *     tags: [Nutritions]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   $ref: '#/components/schemas/Nutrition'
 */