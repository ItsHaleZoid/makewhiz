import * as React from "react";

interface ArrowBlProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowBl: React.FC<ArrowBlProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 100 125"
    width={size}
    height={size}
    {...props}
  >
    <path d="M22.223 70.756a1.25 1.25 0 0 1-.039-2.499c23.19-.75 39.24-6.96 47.703-18.461 10.026-13.624 5.631-30.105 5.585-30.27a1.25 1.25 0 0 1 2.41-.666c.199.721 4.757 17.827-5.981 32.418C62.96 63.427 46.26 69.98 22.264 70.756z"></path>
    <path d="M33.274 80.641c-.27 0-.54-.086-.769-.265l-12.644-9.885a1.25 1.25 0 0 1-.475-.86 1.25 1.25 0 0 1 .294-.937l10.196-11.931a1.25 1.25 0 0 1 1.901 1.624l-9.348 10.938 11.614 9.081a1.25 1.25 0 0 1-.769 2.235"></path>
  </svg>
);

export default ArrowBl;
