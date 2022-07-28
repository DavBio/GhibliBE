import { generatePaginationValues } from '../paginationUtils';

describe('test generatePaginationValues', () => {
    it('should return valid page', () => {
        const validPageOne = generatePaginationValues({ count: 100, currentPage: 1 });
        expect(validPageOne).toStrictEqual({
            totalItems: 100,
            pageSize: 10,
            isValidPage: true,
            totalPages: 10,
            currentPage: 1,
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
            hasNextPage: true,
        });
    });

    it('should return invalid page', () => {
        const invalidPageTen = generatePaginationValues({ count: 100, currentPage: 11 });
        expect(invalidPageTen).toStrictEqual({
            totalItems: 100,
            pageSize: 10,
            isValidPage: false,
            totalPages: 10,
            currentPage: 11,
            hasPrevPage: true,
            hasNextPage: false,
        });

        const invalidPageZero = generatePaginationValues({ count: 100, currentPage: 0 });
        expect(invalidPageZero).toStrictEqual({
            totalItems: 100,
            pageSize: 10,
            isValidPage: false,
            totalPages: 10,
            currentPage: 0,
            hasPrevPage: false,
            hasNextPage: true,
        });
    });
});