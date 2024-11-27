import { ParentProps } from "solid-js";

import { Path } from "./utils";

const GOOGLE_REVIEW_URL =
    "https://www.google.com/search?sca_esv=2ba1e0c14cc8627a&authuser=1&sxsrf=ADLYWIKxHsrVxUbibhUtIBHpLO5PiwHyPQ:1732717411993&q=stazione+pizza&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7vlDtqWr_f7nFSc-1FMap7TdSmb-R2dzU_qJGBwspOt6WMAeXGqiAxTKX2ixJFb3cdm3DsM%3D&uds=ADvngMiIPmC5q4Ug1aEHtbcZGUpeIaCLDLV-M8E8gaZC3ZMMTCvN-JAn4qAuBZC44r9A49m8MWfsdvmNjTs2ukGk8vW_6KvU2C-FtZbwjMTkL5btedccQD0&sa=X&ved=2ahUKEwiA1dmu2_yJAxU687sIHRijMLIQ3PALegQIIBAE&biw=1396&bih=663&dpr=1.38";

type Props = ParentProps;

export function RedirectGuard(props: Props) {
    const url = new URL(location.href);

    if (url.pathname === Path.Review) {
        location.replace(GOOGLE_REVIEW_URL);
        return;
    }

    return props.children;
}
