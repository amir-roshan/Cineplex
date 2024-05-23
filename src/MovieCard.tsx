import NotAvialable from "./not-available.png";

interface movieProps {
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

const MovieCard = ({ Year, Poster, Title, Type }: movieProps) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img src={Poster !== "N/A" ? Poster : NotAvialable} alt={Title} />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
