import { Section } from "../../components/atoms/section";

export function Error(error: any, _reset: () => void) {
    console.error(error);

    return (
        <>
            <Section>
                <h1>Error {error.message}</h1>;
            </Section>
        </>
    );
}
