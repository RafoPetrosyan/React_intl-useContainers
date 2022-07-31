export const makeAction = (type, payload, callback) => {
    return {
        type,
        payload,
        callback,
    }
};