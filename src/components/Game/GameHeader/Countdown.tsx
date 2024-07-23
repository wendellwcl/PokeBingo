import moment from "moment-timezone";
import { useEffect, useState } from "react";

export default function Countdown() {
    const [remainingTime, setRemainingTime] = useState<string | null>(null);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const currentDate = moment().tz("America/Sao_Paulo");

            const remainingHours = 23 - currentDate.hour();
            const remainingMinutes = 59 - currentDate.minute();
            const remainingSeconds = 59 - currentDate.second();

            setRemainingTime(
                `${remainingHours}h ${String(remainingMinutes).padStart(2, "0")}min ${String(remainingSeconds).padStart(
                    2,
                    "0"
                )}`
            );
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    return <span className="font-bold text-nowrap">{remainingTime}</span>;
}
