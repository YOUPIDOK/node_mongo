import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { recipeController, recipeValidation } from '../../modules/recipe';
import { auth } from '../../modules/auth';

const router: Router = express.Router();

router
  .route('/')
  .post(/* auth(), */ validate(recipeValidation.createRecipe), recipeController.createRecipe)
  .get(recipeController.getRecipes);

router.route('/random').get(validate(recipeValidation.getRecipes), recipeController.getRandomRecipe);

router
  .route('/:recipeId')
  .get(validate(recipeValidation.getRecipe), recipeController.getRecipe)
  .patch(auth(), validate(recipeValidation.updateRecipe), recipeController.updateRecipe)
  .delete(auth(), validate(recipeValidation.deleteRecipe), recipeController.deleteRecipe);

export default router;

/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: Recipe management and retrieval
 */

/**
 * @swagger
 * /recipes:
 *   post:
 *     summary: Create a recipe
 *     description: Only users can create other recipes.
 *     tags: [Recipes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - image
 *               - author
 *               - publication_date
 *               - ingredients
 *               - steps
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               author:
 *                 type: string
 *               publication_date:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nutrition:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         unit:
 *                           type: string
 *                         water:
 *                           type: number
 *                         energ_kcal:
 *                           type: number
 *                         protein:
 *                           type: number
 *                         lipid:
 *                           type: number
 *                         carbohydrt:
 *                           type: number
 *                     quantity:
 *                       type: number
 *               steps:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Recipe'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   get:
 *     summary: Get all recipes
 *     description: Everyone can retrieve all recipes.
 *     tags: [Recipes]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Recipe name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: projectBy
 *         schema:
 *           type: string
 *         description: project by query in the form of field:hide/include (ex. name:hide)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of recipes
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Recipe'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 */

/**
 * @swagger
 * /recipes/{id}:
 *   get:
 *     summary: Get a recipe
 *     description: recipes can fetch only their own recipe information.
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Recipe id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Recipe'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a recipe
 *     description: Logged in users can only update their own recipe. Only admins can update other recipes.
 *     tags: [Recipes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Recipe id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               author:
 *                 type: string
 *               publication_date:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nutrition:
 *                       type: object
 *                       properties:
 *                        name:
 *                         type: string
 *                        unit:
 *                         type: string
 *                        water:
 *                         type: number
 *                        energ_kcal:
 *                          type: number
 *                        protein:
 *                          type: number
 *                        lipid:
 *                          type: number
 *                        carbohydrt:
 *                          type: number
 *                     quantity:
 *                       type: number
 *               steps:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Recipe'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a recipe
 *     description: Logged in users can delete only their recipe. Only admins can delete other recipes.
 *     tags: [Recipes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Recipe id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
