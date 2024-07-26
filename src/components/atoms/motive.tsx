export type Motive = {
    title: string;
    description: string;
};

type MotiveProps = Motive;

export function Motive(props: MotiveProps) {
    return (
        <li>
            <h4 class="font-extrabold text-xl text-stz-primary mb-2">
                {props.title}
            </h4>
            <p class="font-dm-sans text-stz-dark">{props.description}</p>
        </li>
    );
}
