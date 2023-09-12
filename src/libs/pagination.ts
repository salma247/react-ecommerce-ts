export const getPaginatedData = <T>(data: T[], page: number, limit: number) => {
    const offset = (page - 1) * limit;
    return data.slice(offset, offset + limit);
}
