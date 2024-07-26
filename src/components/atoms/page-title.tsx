import { ParentProps, children } from "solid-js";

type Props = ParentProps & {
    side?: "left" | "right";
};

const BAR_CLASSES = "w-full h-16 bg-stz-primary";

export function PageTitle(props: Props) {
    props.side ??= "left";

    const resolved = children(() => props.children);

    const isLeft = props.side === "left";
    const isRight = props.side === "right";

    return (
        <div class="flex justify-between items-center py-14">
            {isRight && <span class={BAR_CLASSES} />}
            <h1 class="text-8xl font-extrabold text-stz-dark px-36">
                {resolved()}
            </h1>
            {isLeft && <span class={BAR_CLASSES} />}
        </div>
    );
}
