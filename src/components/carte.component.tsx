import { TypeCarte } from '../data/CarteData';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

interface ICarteProps {
  carte: TypeCarte;
  callback: (card: TypeCarte) => void;
}

const Carte: React.FC<ICarteProps> = ({ carte, callback }) => {
    const handleClick = () => {
      if (carte.cliquee) callback(carte)
    }
  
    return (
      <Box onClick={handleClick}>
        <CardMedia revelee={carte.revelee} src={carte.faceCarte} alt="carte-face" />
        <CardMedia revelee={carte.revelee} src={carte.dosCarte} alt="carte-dos" />
      </Box>
    )
  }
  
  export default Carte
