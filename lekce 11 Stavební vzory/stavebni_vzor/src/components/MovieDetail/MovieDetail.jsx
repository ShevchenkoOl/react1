import './style.css';

export const MovieDetail = ({extract, image, opened}) => {
    if (!opened) {
        return null;
    }
    return (
        <div className="detail-container">
            <img src={image} alt="Movie Thumbnail"></img>
            <div>{extract}</div>
        </div>
    )
};