export const search = (params = []) => {
    return {
        type: 'search',
        params: ...params
    }
};