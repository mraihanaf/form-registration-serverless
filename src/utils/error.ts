export async function handleError(
  exec: Function,
): Promise<[any, unknown | null]> {
  try {
    const data = await exec()
    return [data, null]
  } catch (error: unknown) {
    return [null, error]
  }
}
