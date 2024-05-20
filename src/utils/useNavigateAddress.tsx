import { useNavigate } from "react-router-dom";

export const useNavigateAddress = () => {
  const navigate = useNavigate();
  const handNavigate = ({ address }: { address: string}) => {
    navigate(`${address}`);
  };
  return { handNavigate };
};
