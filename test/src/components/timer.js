import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {   
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);
    
        return () => {  //размонтирование счетчика
            clearInterval(timer);
        }
    }, []) // если в момент монтирования, то вторым аргументом ничего не передаем. Если в момент монтирования и обновления , [] - оставляем. Если зависит от пропса - то вписываем пропс, значит отрабатывает в момент обновления пропса
    
    return ( 
        <div>
            <p>Time {time.toLocaleTimeString()}</p>
        </div>
     );
}

export default Timer;