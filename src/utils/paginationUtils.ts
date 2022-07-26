export const PROJECTS_PER_PAGE = 10;

export const generatePaginationValues = ({ count, currentPage }: { count: number, currentPage: number }) => {
    const totalPages = Math.ceil(count / PROJECTS_PER_PAGE);

    return {
        totalItems: count,
        pageSize: PROJECTS_PER_PAGE,
        isValidPage: currentPage < totalPages,
        totalPages,
        currentPage,
        hasPrevPage: currentPage !== 0,
        hasNextPage: (currentPage + 1) < totalPages,
    }
}