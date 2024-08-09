import { clsx } from "clsx";
import { ParentProps, children } from "solid-js";

type TProps = ParentProps & {
    side?: "left" | "right";
};

export function PageTitle(props: TProps) {
    props.side ??= "left";

    const resolved = children(() => props.children);

    const isLeft = props.side === "left";
    const isRight = props.side === "right";

    return (
        <div class="container flex items-center justify-between py-8 sm:py-14">
            <h1
                class={clsx(
                    "whitespace-nowrap text-4xl font-extrabold text-stz-dark sm:text-6xl md:text-8xl",
                    isRight && "order-2 pl-8 sm:pl-16",
                    isLeft && "order-1 pr-8 sm:pr-16",
                )}
            >
                {resolved()}
            </h1>
            <div
                class={clsx(
                    "h-12 w-full bg-stz-primary sm:h-16",
                    isRight && "order-1",
                    isLeft && "order-2",
                )}
            />
        </div>
    );
}
