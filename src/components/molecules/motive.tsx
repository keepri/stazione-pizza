import { H4 } from "../atoms/heading-four";
import { P } from "../atoms/paragraph";

type TProps = TMotive;

export function Motive(props: TProps) {
    return (
        <li>
            <H4 class="mb-2">{props.title}</H4>
            <P class="text-lg">{props.description}</P>
        </li>
    );
}

export type TMotive = {
    title: string;
    description: string;
};
