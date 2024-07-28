import { clsx } from "clsx";
import { ParentProps, children } from "solid-js";

type Props = ParentProps & {
    side?: "left" | "right";
};

export function PageTitle(props: Props) {
    props.side ??= "left";

    const resolved = children(() => props.children);

    const isLeft = props.side === "left";
    const isRight = props.side === "right";

    return (
        <div class="flex justify-between items-center py-14">
            <h1
                class={clsx(
                    "text-8xl font-extrabold text-stz-dark px-36",
                    isRight && "order-2",
                    isLeft && "order-1",
                )}
            >
                {resolved()}
            </h1>
            <span
                class={clsx(
                    "w-full h-16 bg-stz-primary",
                    isRight && "order-1",
                    isLeft && "order-2",
                )}
            />
        </div>
    );
}
