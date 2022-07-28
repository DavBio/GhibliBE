export const PROJECTS_PER_PAGE = 10;

export const generatePaginationValues = ({ count, currentPage }: { count: number, currentPage: number }) => {
    const totalPages = Math.ceil(count / PROJECTS_PER_PAGE);

    return {
        totalItems: count,
        pageSize: PROJECTS_PER_PAGE,
        isValidPage: currentPage <= totalPages && currentPage !== 0,
        totalPages,
        currentPage,
        hasPrevPage: currentPage > 1,
        hasNextPage: currentPage < totalPages,
    }
}