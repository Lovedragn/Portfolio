import { useNavigate } from "react-router-dom";
import { useTransition } from "../context/TransitionContext";

const AnimatedLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const { setIsTransitioning, setOnCover } = useTransition();

  const handleClick = (e) => {
    e.preventDefault();
    setOnCover(() => () => navigate(to));
    setIsTransitioning(true);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default AnimatedLink; 