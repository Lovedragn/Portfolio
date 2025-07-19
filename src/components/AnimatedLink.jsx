import { useNavigate } from "react-router-dom";
import { useTransition } from "../context/TransitionContext.jsx";

const AnimatedLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const { setTransitioning, setOnCoverCallback } = useTransition();

  const handleClick = (e) => {
    e.preventDefault();
    setOnCoverCallback(() => () => navigate(to));
    setTransitioning(true);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default AnimatedLink; 