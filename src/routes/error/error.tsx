export function Error(error: any, _reset: () => void) {
    console.error(error);

    return (
        <>
            <section class="container">
                <h1>Error {error.message}</h1>;
            </section>
        </>
    );
}
