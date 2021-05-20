// Implement the pagination logic.

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Pagination = {
    currentPageNumber: 1,
    pageSize: 0,
    array: [],

    init: (array, pageSize) => {
        Pagination.array = array;
        Pagination.pageSize = pageSize;
    },

    getPageItems: () => {
        console.log(
            Pagination.array.slice(
                (Pagination.currentPageNumber - 1) * Pagination.pageSize,
                Pagination.currentPageNumber * Pagination.pageSize
            )
        );
    },

    nextPage: () => {
        Pagination.currentPageNumber++;
        return Pagination;
    },

    prevPage: () => {
        if (Pagination.currentPageNumber !== 1) {
            Pagination.currentPageNumber--;
        }

        return Pagination;
    },

    firstPage: () => {
        Pagination.currentPageNumber = 1;
    },

    lastPage: () => {
        Pagination.currentPageNumber = Math.ceil(Pagination.array.length / Pagination.pageSize);
    },

    goToPage: (num) => {
        Pagination.currentPageNumber = num;
    },
};

Pagination.init(alphabetArray, 4);

Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage();
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage();
Pagination.goToPage(6);
Pagination.getPageItems(); // ["u", "v", "w", "x"]
Pagination.prevPage();
Pagination.getPageItems(); // ["q", "r", "s", "t"]
