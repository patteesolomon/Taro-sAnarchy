import Phaser from 'phaser';

class ACR
{
    name = '';
    constructor(name, statbase = [])
    {
        this.name = name;

        const getName=() =>
        {
            return name;
        }

        function getHp()
        {
            return statbase[0];
        }

        function getSp()
        {
            return statbase[1];
        }

        function getAnyStat(stat)
        {
            return statbase[stat];
        }
    }

    loop(args)
    {

    }
}

export default ACR