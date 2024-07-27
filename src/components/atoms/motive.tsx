export type Props = {
    title: string;
    description: string;
};

export function Motive(props: Props) {
    return (
        <li>
            <h4 class="font-extrabold text-xl text-stz-primary mb-2">
                {props.title}
            </h4>
            <p class="font-dm-sans text-stz-dark">{props.description}</p>
        </li>
    );
}
