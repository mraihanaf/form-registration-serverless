import { builder, BuilderHandler, HandlerResponse } from "@netlify/functions"
import { buildResponse, Method, Status } from "../utils/response"
import { connect } from "../utils/databaseHelper"
import { Connection } from "mongoose"

const builderHandler: BuilderHandler = async (
  event,
  context,
): Promise<HandlerResponse> => {
  const [connection, error] = await connect()
  if (error)
    return buildResponse(
      Status.InternalError,
      "failed to connect to the database",
    )
  return buildResponse(Status.OK, "Connected to the database.")
}

const handler = builder(builderHandler)

export { handler }
