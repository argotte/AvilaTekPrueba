export function getPaginationParams(req:any) {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    return { page, pageSize };
}