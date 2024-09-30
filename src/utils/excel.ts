import { HandlerResponse } from "@netlify/functions"
import { Workbook } from "exceljs"
import { Status } from "./response"

export async function buildResponseBufferExcel(
  filename: string,
  workbook: Workbook,
): Promise<HandlerResponse> {
  const buffer = await workbook.xlsx.writeBuffer()
  return {
    statusCode: Status.OK,
    headers: {
      "Content-type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
    isBase64Encoded: true,
    body: buffer.toString(),
  }
}
