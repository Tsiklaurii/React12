import { useParams } from "react-router-dom";

import GTA_5 from '../../assets/images/game_posters/GTA_5.svg';
import GTA_online from '../../assets/images/game_posters/GTA_online.svg';
import RED from '../../assets/images/game_posters/RED.svg';
import RED_online from '../../assets/images/game_posters/RED_Online.svg';

const GameDetails = () => {
    const { number } = useParams();

    const posters = {
        "1": GTA_5,
        "2": GTA_online,
        "3": RED,
        "4": RED_online
    };

    const poster = posters[number as "1" | "2" | "3" | "4"];

    return (
        <div className="w-full h-full bg-[#101010] flex justify-center p-15">
            <img src={poster} alt="Selected Game Poster" className="w-[400px]" />
        </div>
    );
};

export default GameDetails;
