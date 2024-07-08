export function Error(error: any, _reset: () => void) {
    console.error(error);

    return <h1>Error {error.message}</h1>;
}
