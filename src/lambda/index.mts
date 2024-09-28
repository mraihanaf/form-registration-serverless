import { builder, BuilderHandler, HandlerResponse } from "@netlify/functions"
import { buildResponse, Method, Status } from "../utils/response"

const builderHandler: BuilderHandler = async (
  event,
  context,
): Promise<HandlerResponse> => {
  const response = buildResponse(Status.OK, "test", null, {
    method: [Method.GET, Method.POST],
  })
  return response
}

const handler = builder(builderHandler)

export { handler }
