import { handleError } from "../src/utils/error"

describe("error handler", () => {
  it("should handle proper function", async () => {
    const properFunction = jest.fn(async () => {
      return "foo"
    })
    const [data, error] = await handleError(properFunction)
    expect(properFunction.mock.calls).toHaveLength(1)
    expect(data).toMatch("foo")
    expect(error).toBe(null)
  })

  it("should handle error function", async () => {
    const errorFunction = jest.fn(async () => {
      throw new Error()
    })
    const [data, error] = await handleError(errorFunction)
    expect(errorFunction.mock.calls).toHaveLength(1)
    expect(data).toBe(null)
    expect(error).toBeInstanceOf(Error)
  })
})
