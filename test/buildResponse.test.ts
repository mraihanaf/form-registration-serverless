import { buildResponse } from "../src/utils/response"

describe("buildResponse Function", () => {
  it("should returns HandlerResponse", () => {
    const response = buildResponse(200, "Hello World")
    const body = JSON.parse(response.body!)
    expect(response.statusCode).toBe(200)
    expect(response).toHaveProperty("body")
    expect(body.statusCode).toBe(200)
    expect(body.message).toBe("Hello World")
  })

  it("have method options", () => {
    const response = buildResponse(200, "Hello World", null, {
      method: ["GET"],
    })
    expect(response.headers).toHaveProperty(
      "Access-Control-Allow-Methods",
      "GET",
    )
  })

  it("can have data parameter", () => {
    const dummy = {
      foo: "bar",
      bizz: "buzz",
    }
    const response = buildResponse(200, "Hello World!", dummy)
    const responseBody = JSON.parse(response.body!)
    expect(responseBody.data).toMatchObject(dummy)
  })
})
