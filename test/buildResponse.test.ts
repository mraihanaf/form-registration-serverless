import { Method, Status } from "../src/types"
import { buildResponse } from "../src/utils/response"

describe("buildResponse Function", () => {
  it("should returns HandlerResponse", () => {
    const response = buildResponse(Status.OK, "Hello World")
    const body = JSON.parse(response.body!)
    expect(response.statusCode).toBe(Status.OK)
    expect(response).toHaveProperty("body")
    expect(body.statusCode).toBe(Status.OK)
    expect(body.message).toBe("Hello World")
  })

  it("have method options", () => {
    const response = buildResponse(Status.OK, "Hello World", null, {
      method: [Method.GET],
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
    const response = buildResponse(Status.OK, "Hello World!", dummy)
    const responseBody = JSON.parse(response.body!)
    expect(responseBody.data).toMatchObject(dummy)
  })
})
