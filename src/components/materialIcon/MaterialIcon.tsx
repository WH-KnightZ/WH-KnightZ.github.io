import React from 'react';

interface Props {
  icon: string;
  size?: number;
  color?: string;
}

const MaterialIcon: React.FC<Props> = ({ icon, size = 24, color }) => {
  return (
    <i className="material-icons" style={{ fontSize: size, color }}>
      {icon}
    </i>
  );
};

export default MaterialIcon;
