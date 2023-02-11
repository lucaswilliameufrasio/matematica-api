import type { Environment } from 'hono/dist/types/types'
import type { Context } from 'hono'
import { randexp } from 'randexp'

export const generateArithmeticOperationHandler = (
  context: Context<string, Environment, unknown>,
) => {
  const arithmeticOperation = randexp(/^\d([+*]\d){1,3}$/)

  return context.json({
    arithmeticOperation,
  })
}
