import { unstable_dev } from 'wrangler'
import type { UnstableDevWorker } from 'wrangler'
import { describe, expect, it, beforeAll, afterAll } from 'vitest'

describe('Worker', () => {
  let worker: UnstableDevWorker

  beforeAll(async () => {
    worker = await unstable_dev('src/index.ts', {
      experimental: { disableExperimentalWarning: true },
    })
  })

  afterAll(async () => {
    await worker.stop()
  })

  describe('When calling GET /', () => {
    it('should return an arithmetic operation', async () => {
      const response = await worker.fetch('/')
      const result = await response.text()

      expect(result).toBe('Hello! This is an API about mathematic challenges, hope you enjoy.')
    })
  })

  describe('When calling GET /arithmetic-challenge', () => {
    it('should return an arithmetic operation', async () => {
      const response = await worker.fetch('/arithmetic-challenge')
      const result = await response.json()

      expect(result).toEqual({
        arithmeticOperation: expect.anything(),
      })
    })
  })
})
