// Flags
import Flags from 'country-flag-icons/react/3x2';

const FlagIcon = ({ flagNationCode }) => {
    const Flag = Flags[flagNationCode];
    return (
        <div className='flag-icon'>
            <Flag />
        </div>
    )
}

export default FlagIcon
