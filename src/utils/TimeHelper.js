class TimeHelper {
    static format(value = '') { //Recebe o valor em ms
        if (!value) return '00:00'; //Primeira verificação

        let minutes = '';
        let seconds = '';
        let time = '';

        value = value / 1000 //Transforma em segundos
        value = Math.trunc(value);

        if (value >= 60) { 
            seconds = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60);
            minutes = parseInt(value / 60) < 10 ? '0' + parseInt(value / 60) : parseInt(value / 60);
        }

        else {
            minutes = '00'
            seconds = value < 10 ? '0' + value : value;
        }

        time = `${minutes}:${seconds}`;
        return time;
    }

    static porcent(current, duration){
        return Number(current.toFixed(2)) * 100/duration;
    }

    static toCurrent(value, duration){
        return value * duration/100;
    }

}


export default TimeHelper;