const resolveLinkedList = (list = {}) => {
    const iter = (list, result) => {
        if (list === null || !list.value) {
            return result;
        }

        result.push(list.value);
        return iter(list.next, result);
    };

    return iter(list, []);
};

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

console.log(resolveLinkedList(list)); // [1, 2, 3, 4]
