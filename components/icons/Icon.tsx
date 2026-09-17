import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  icon: IconDefinition;
  className?: string;
};

const Icon = ({ icon, className }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
    />
  );
};

export default Icon;