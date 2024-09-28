import mongoose, { Connection } from "mongoose"

let connection: Connection | null = null
const uri: string = process.env.MONGODB_URI!

export async function connect(): Promise<Connection> {
  if (connection !== null) return connection
  try {
    connection = mongoose.createConnection(uri, {
      serverSelectionTimeoutMS: 5000,
    })
    await connection.asPromise()
    return connection
  } catch (error: unknown) {
    throw error
  }
}
