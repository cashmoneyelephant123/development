import PlayerStats from './PlayerStats';
import PlayerData from './PlayerData';


export default function Player({
    playerData,
    name,
    addToRoster,
    roster,
}) {

    const onRosterClick = () => {
        addToRoster(name)
    }
    const buttonText = Object.values(roster).includes(name) ? "Remove from Roster" : "Add to Roster"
    const rosterSize = Object.values(roster).filter(p => p !== "").length

    const playerPosition = playerData["Primary Position"]

    return (
        <div className='card-container'>
            <PlayerData name={name} playerData={playerData} />
            <h4>{name}</h4>
            <PlayerStats playerData={playerData} />


            <button disabled={(rosterSize === 5 && buttonText === "Add to Roster") || (roster[playerPosition] !== "" && roster[playerPosition] !== name)} className="roster-button" onClick={onRosterClick}>
                {buttonText}
            </button>
        </div>
    );
}