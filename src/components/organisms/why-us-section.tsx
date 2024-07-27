import { Index } from "solid-js";

import { Motive, Props as MotiveProps } from "../atoms/motive";
import { Section } from "../atoms/section";

type Props = {
    motives: ReadonlyArray<MotiveProps>;
};

export function WhyUsSection(props: Props) {
    return (
        <Section>
            <h2 class="text-7xl font-extrabold text-stz-dark mb-16">
                De ce să ne alegi?
            </h2>
            <ul class="flex flex-col gap-7">
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
