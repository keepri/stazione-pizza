import { clsx } from "clsx";

import PhoneSvg from "../../assets/icons/socials/phone.svg";
// {
//     href: `tel:${TELEPHONE_NUMBER}`,
//     children: (() => {
//         let number = "";
//         for (let i = 0; i < TELEPHONE_NUMBER.length; ++i) {
//             number += TELEPHONE_NUMBER[i];
//             if (!(i % 3)) number += " ";
//         }
//         return number;
//     })(),
//     icon: PhoneSvg,
// } as const,
import { PHONE_NUMBER } from "../../data/company-info";

type TProps = {
    class?: string;
};

export function CallUs(props: TProps) {
    const size = 20;

    let phoneNumber = "";
    for (let i = 0; i < PHONE_NUMBER.length; i += 3) {
        phoneNumber += PHONE_NUMBER.slice(i, i + 3);
        phoneNumber += " ";
    }

    return (
        <a
            class={clsx(props.class, "flex items-center gap-2 hover:underline")}
            href={"tel:" + PHONE_NUMBER}
        >
            {/* TODO extract fill color into constant (STZ_DARK) */}
            <PhoneSvg fill="#401211" width={size} height={size} />
            {phoneNumber}
        </a>
    );
}
