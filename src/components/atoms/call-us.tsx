import { clsx } from "clsx";

import PhoneSvg from "../../assets/icons/socials/phone.svg";
import { PHONE_NUMBER } from "../../data/company-info";
import { STZ_DARK } from "../../utils/constants";

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
            <PhoneSvg fill={STZ_DARK} width={size} height={size} />
            {phoneNumber}
        </a>
    );
}
