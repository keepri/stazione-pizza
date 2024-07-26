import { Index } from "solid-js";

import { Motive } from "../atoms/motive";
import { Section } from "../atoms/section";

type Props = {
    motives: ReadonlyArray<Motive>;
};

export function WhyUsSection(props: Props) {
    return (
        <Section>
            <h1 class="text-7xl font-extrabold text-stz-dark mb-16">
                De ce să ne alegi?
            </h1>
            <ul class="flex flex-col gap-5">
                <Index each={props.motives}>
                    {function renderMotive(motive) {
                        const { title, description } = motive();

                        return (
                            <Motive title={title} description={description} />
                        );
                    }}
                </Index>
            </ul>
        </Section>
    );
}
