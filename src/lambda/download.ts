import { builder, BuilderHandler, HandlerResponse } from "@netlify/functions"
import { buildResponse, Method, Status } from "../utils/response"
import { Workbook } from "exceljs"
import { buildResponseBufferExcel } from "../utils/excel"
import { read, readFileSync } from "fs"

const builderHandler: BuilderHandler = async (
  event,
  context,
): Promise<HandlerResponse> => {
  const workbook = new Workbook()
  const sheet = workbook.addWorksheet("My Sheet")
  sheet.columns = [
    { header: "Id", key: "id", width: 10 },
    { header: "Name", key: "name", width: 32 },
    { header: "D.O.B.", key: "DOB", width: 10, outlineLevel: 1 },
  ]
  return buildResponseBufferExcel("file.xlsx", workbook)
}

const handler = builder(builderHandler)

export { handler }
