export function isObject(object: unknown) {
    const isObject = typeof object === "object";
    const isNotNull = object !== null;

    return isObject && isNotNull;
}
