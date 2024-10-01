import { builder, BuilderHandler, HandlerResponse } from "@netlify/functions"
import { buildResponse, Status } from "../utils/response"
import { randomBytes } from "crypto"

const builderHandler: BuilderHandler = async (
  event,
  context,
): Promise<HandlerResponse> => {
  const randomKey: string = randomBytes(16).toString("hex")
  return buildResponse(Status.OK, "Successfully created an key", {
    key: randomKey,
  })
}

const handler = builder(builderHandler)

export { handler }
