import { generatePaginationValues } from '../paginationUtils';

describe('test generatePaginationValues', () => {
    it('should return valid page', () => {
        const validPageZero = generatePaginationValues({ count: 100, currentPage: 0 });
        expect(validPageZero).toStrictEqual({
            totalItems: 100,
            pageSize: 10,
            isValidPage: true,
            totalPages: 10,
            currentPage: 0,
            hasPrevPage: false,
            hasNextPage: true,
        });

        const validLastPageWithLessThanTenProjects = generatePaginationValues({ count: 95, currentPage: 9 });
        expect(validLastPageWithLessThanTenProjects).toStrictEqual({
            totalItems: 95,
            pageSize: 10,
            isValidPage: true,
            totalPages: 10,
            currentPage: 9,
            hasPrevPage: true,
            hasNextPage: false,
        });
    });

    it('should return invalid page', () => {
        const invalidPageTen = generatePaginationValues({ count: 100, currentPage: 10 });
        expect(invalidPageTen).toStrictEqual({
            totalItems: 100,
            pageSize: 10,
            isValidPage: false,
            totalPages: 10,
            currentPage: 10,
            hasPrevPage: true,
            hasNextPage: false,
        });
    });
});